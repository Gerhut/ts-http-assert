# ts-http-assert

[![Build Status](https://travis-ci.com/Gerhut/ts-http-assert.svg)](https://travis-ci.com/Gerhut/ts-http-assert)
[![Coverage Status](https://coveralls.io/repos/github/Gerhut/ts-http-assert/badge.svg?branch=main)](https://coveralls.io/github/Gerhut/ts-http-assert?branch=main)

TypeScript version of [http-assert](https://www.npmjs.com/package/http-assert) with
[Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions).

## Motivation

There are multiple attempts to give the http-assert assertion functions supports:

-   https://github.com/DefinitelyTyped/DefinitelyTyped/pull/46014
-   https://github.com/DefinitelyTyped/DefinitelyTyped/pull/46698
-   https://github.com/DefinitelyTyped/DefinitelyTyped/pull/47557

All of these attemps are failed because @types/koa refers @types/http-assert as methods, and due to
https://github.com/microsoft/TypeScript/issues/36931 methods cannot simply have assertion functions.

This package is a drop-in replacement of the `http-assert` package with:

-   better typings, and
-   assertion functions support.

## Install

```shell
npm install ts-http-assert
```

or

```
yarn add ts-http-assert
```

## Usage

Just replace all

```TypeScript
import assert from 'http-assert'
```

with

```TypeScript
import assert from 'ts-http-assert`
```

to give the `assert` function and its child functions better typings.

1. All parameter combinations in `createHttpError`, includes:

    - `assert(value, status, message, properties)`
    - `assert(value, status, message)`
    - `assert(value, status, properties)`
    - `assert(value, status)`
    - `assert(value, message, properties)`
    - `assert(value, message)`
    - `assert(value, properties)`
    - `assert(value)`

2. `assert` and `assert.ok` have assertion signatures to assert the condition is true,
   for example:

    ```TypeScript
    import { IncomingMessage, ServerResponse } from 'http'
    import assert from 'ts-http-assert'

    function controller(req: IncomingMessage, res: ServerResponse): void {
        const authorization = req.headers['authorization']
        // authorization might be string | string[] | undefined
        assert(typeof authorization === 'string', 401)
        // or `assert.ok(typeof authorization === 'string', 401)`

        // It's OK to call the following `authorization.split` because authorization
        // is asserted to be string in the above line.
        const [method, credentials] = authorization.split(' ', 2)
        res.end(`You are in ${method} authorization.`)
    }
    ```

3. `assert.strictEqual` has assertion signature to assert to 2 values are of the same type,
   for example:

    ```TypeScript
    import { IncomingMessage, ServerResponse } from 'http'
    import assert from 'ts-http-assert'

    function controller(req: IncomingMessage, res: ServerResponse): void {
        const contentType = req.headers['content-type']
        assert.strictEqual(contentType, 'application/json')

        // Now the contentType is asserted to be of type string
        res.end(`You submitted in type ${contentType.splice('/')[1]}`)
    }
    ```

## License

MIT
