/**
 * The API of this module is intended to be similar to the
 * [Node.js `assert` module](https://nodejs.org/dist/latest/docs/api/assert.html).
 *
 * Each function will throw an instance of `HttpError` from
 * [the `http-errors` module](https://www.npmjs.com/package/http-errors)
 * when the assertion fails.
 */
import httpAssert from 'http-assert'

type CreateHttpErrorParameters =
  | [status?: number, message?: string, properties?: { [key: string]: unknown }]
  | [status?: number, properties?: { [key: string]: unknown }]
  | [message?: string, properties?: { [key: string]: unknown }]
  | [properties?: { [key: string]: unknown }]
  | []

/**
 * Tests if `value` is truthy. If `value` is not truthy, an `HttpError`
 * is thrown that is constructed with the given `status`, `message`,
 * and `properties`.
 */
function _assert(value: boolean, ...parameters: CreateHttpErrorParameters): asserts value {
  httpAssert(value, ...(parameters as never[]))
}

/**
 * Tests for deep equality between `a` and `b`. Primitive values are
 * compared with the Abstract Equality Comparison (`==`). If `a` and `b`
 * are not equal, an `HttpError` is thrown that is constructed with the
 * given `status`, `message`, and `properties`.
 */
function deepEqual(a: unknown, b: unknown, ...parameters: CreateHttpErrorParameters): void {
  httpAssert.deepEqual(a, b, ...(parameters as never[]))
}

/**
 * Tests shallow, coercive equality between `a` and `b` using the Abstract
 * Equality Comparison (`==`). If `a` and `b` are not equal, an `HttpError`
 * is thrown that is constructed with the given `status`, `message`,
 * and `properties`.
 */
function equal(a: unknown, b: unknown, ...parameters: CreateHttpErrorParameters): void {
  httpAssert.equal(a, b, ...(parameters as never[]))
}

/**
 * Tests for deep equality between `a` and `b`. Primitive values are
 * compared with the Abstract Equality Comparison (`==`). If `a` and `b`
 * are equal, an `HttpError` is thrown that is constructed with the given
 * `status`, `message`, and `properties`.
 */
function notDeepEqual(a: unknown, b: unknown, ...parameters: CreateHttpErrorParameters): void {
  httpAssert.notDeepEqual(a, b, ...(parameters as never[]))
}

/**
 * Tests shallow, coercive equality between `a` and `b` using the Abstract
 * Equality Comparison (`==`). If `a` and `b` are equal, an `HttpError` is
 * thrown that is constructed with the given `status`, `message`, and
 * `properties`.
 */
function notEqual(a: unknown, b: unknown, ...parameters: CreateHttpErrorParameters): void {
  httpAssert.notEqual(a, b, ...(parameters as never[]))
}

/**
 * Tests strict equality between `a` and `b` as determined by the SameValue
 * Comparison (`===`). If `a` and `b` are equal, an `HttpError` is thrown
 * that is constructed with the given `status`, `message`, and `properties`.
 */
function notStrictEqual(a: unknown, b: unknown, ...parameters: CreateHttpErrorParameters): void {
  httpAssert.notStrictEqual(a, b, ...(parameters as never[]))
}

/**
 * Tests if `value` is truthy. If `value` is not truthy, an `HttpError`
 * is thrown that is constructed with the given `status`, `message`,
 * and `properties`.
 */
function ok(value: boolean, ...parameters: CreateHttpErrorParameters): asserts value {
  httpAssert.ok(value, ...(parameters as never[]))
}

/**
 * Tests strict equality between `a` and `b` as determined by the SameValue
 * Comparison (`===`). If `a` and `b` are not equal, an `HttpError`
 * is thrown that is constructed with the given `status`, `message`,
 * and `properties`.
 */
function strictEqual<T>(a: unknown, b: T, ...parameters: CreateHttpErrorParameters): asserts a is T {
  httpAssert.strictEqual(a, b, ...(parameters as never[]))
}

const assert: typeof _assert & {
  deepEqual: typeof deepEqual
  equal: typeof equal
  notDeepEqual: typeof notDeepEqual
  notEqual: typeof notEqual
  notStrictEqual: typeof notStrictEqual
  ok: typeof ok
  strictEqual: typeof strictEqual
} = Object.assign(_assert, {
  deepEqual,
  equal,
  notDeepEqual,
  notEqual,
  notStrictEqual,
  ok,
  strictEqual
})

export = assert
