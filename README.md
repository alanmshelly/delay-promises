# Delayed Promise

Returns a Promise which can be resolved or rejected at any time.

Helpful when testing what happens between when a promise is created and when it completes.

## Usage

```javascript
// create a promise
let delayedPromise = createDelayedPromise()

// use the promise like normal
delayedPromise.then((value) => {
    console.log(value)
}).catch((reason) => {
    console.log(reason)
})

// then resolve the promise when you want
delayedPromise.resolve({some: 'value'})

// or you can reject it
delayedPromise.reject('rejecting the promise')
```

## Typescript Support

delayed-promise is written in typescript so you don't have to install any type definitions!

```typescript
let delayedPromise = createDelayedPromise<string>()

delayedPromise.then((value: string) => {
    console.log(value)
})

delayedPromise.resolve('promise resolved!')
```
