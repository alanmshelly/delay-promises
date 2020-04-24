import {DelayedPromise} from '../src'

describe('DelayedPromise', () => {
    it('create a new delayed promise', () => {
        expect(new DelayedPromise()).toBeDefined()
    })
})
