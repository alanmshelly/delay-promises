export type DelayedPromise<T> = {
    resolve: (value: T | PromiseLike<T>) => void
    reject: (reason?: any) => void
} & Promise<T>

export function createDelayedPromise<T>(): DelayedPromise<T> {
    let resolveFunction: (value: T | PromiseLike<T>) => void
    let rejectFunction: (reason?: any) => void

    const promise = new Promise(((resolve, reject) => {
        resolveFunction = resolve
        rejectFunction = reject
    })) as DelayedPromise<T>

    promise.resolve = (value: T | PromiseLike<T>) => resolveFunction(value)
    promise.reject = (reason?: any) => rejectFunction(reason)

    return promise
}
