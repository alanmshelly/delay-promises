import {createDelayedPromise, DelayedPromise} from '../src'

describe('DelayedPromise', () => {
    it('should be a Promise', () => {
        expect(createDelayedPromise().constructor).toBe(Promise)
    })

    it('should not resolve or reject', async () => {
        let promiseResolvedOrRejected = false
        let promiseCompleted = false
        createDelayedPromise()
            .then(() => {
                promiseResolvedOrRejected = true
            })
            .catch(() => {
                promiseResolvedOrRejected = true
            })
            .finally(() => {
                promiseCompleted = true
            })

        await wait()

        expect(promiseResolvedOrRejected).toEqual(false)
        expect(promiseCompleted).toEqual(false)
    })

    it('should resolve with value when resolve is called', async () => {
        let promiseResolveValue: string | null = null
        let promiseCompleted = false
        let delayedPromise = createDelayedPromise<string>()
        delayedPromise
            .then((value) => {
                promiseResolveValue = value
            })
            .finally(() => {
                promiseCompleted = true
            })


        delayedPromise.resolve('promise resolved with value')

        await wait()

        expect(promiseResolveValue).toEqual('promise resolved with value')
        expect(promiseCompleted).toEqual(true)
    })

    it('should reject with value when reject is called', async () => {
        let promiseRejectedValue: string | null = null
        let promiseCompleted = false
        let delayedPromise = createDelayedPromise()

        delayedPromise
            .catch((value) => {
                promiseRejectedValue = value
            })
            .finally(() => {
                promiseCompleted = true
            })


        delayedPromise.reject('promise rejected with value')

        await wait()

        expect(promiseRejectedValue).toEqual('promise rejected with value')
        expect(promiseCompleted).toEqual(true)
    })
})

function wait() {
    return new Promise(resolve => setTimeout(resolve, 0))
}
