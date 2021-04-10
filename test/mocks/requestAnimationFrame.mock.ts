// https://stackoverflow.com/a/62282721/6361314
class RequestAnimationFrameMockSession {

    handleCounter = 0;
    queue = new Map();

    requestAnimationFrame(callback: () => any) {
        const handle = this.handleCounter++;
        this.queue.set(handle, callback);
        return handle;
    }

    cancelAnimationFrame(handle: () => any) {
        this.queue.delete(handle);
    }

    triggerNextAnimationFrame(time: number = performance.now()) {
        const nextEntry = this.queue.entries().next().value;
        if (nextEntry === undefined) return;

        const [nextHandle, nextCallback] = nextEntry;

        nextCallback(time);
        this.queue.delete(nextHandle);
    }

    triggerAllAnimationFrames(time = performance.now()) {
        while (this.queue.size > 0) this.triggerNextAnimationFrame(time);
    }

    reset() {
        this.queue.clear();
        this.handleCounter = 0;
    }
};

export const requestAnimationFrameMock = new RequestAnimationFrameMockSession();

// @ts-ignore
window.requestAnimationFrame = requestAnimationFrameMock.requestAnimationFrame.bind(requestAnimationFrameMock);
// @ts-ignore
window.cancelAnimationFrame = requestAnimationFrameMock.cancelAnimationFrame.bind(requestAnimationFrameMock);
