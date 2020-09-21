/**
 * The API of this module is intended to be similar to the
 * [Node.js `assert` module](https://nodejs.org/dist/latest/docs/api/assert.html).
 *
 * Each function will throw an instance of `HttpError` from
 * [the `http-errors` module](https://www.npmjs.com/package/http-errors)
 * when the assertion fails.
 */
import httpAssert from 'http-assert'

type Status = number
type Message = string
type Properties = { [key: string]: unknown }

type CreateHttpErrorParameters =
  | [Status, Message, Properties]
  | [Status, Message]
  | [Status, Properties]
  | [Status]
  | [Message, Properties]
  | [Message]
  | [Properties]
  | []

/**
 * Tests if `value` is truthy. If `value` is not truthy, an `HttpError`
 * is thrown that is constructed with the given `status`, `message`,
 * and `properties`.
 */
function _assert(value: boolean, status: Status, message: Message, properties: Properties): asserts value
function _assert(value: boolean, status: Status, message: Message): asserts value
function _assert(value: boolean, status: Status, properties: Properties): asserts value
function _assert(value: boolean, status: Status): asserts value
function _assert(value: boolean, message: Message, properties: Properties): asserts value
function _assert(value: boolean, message: Message): asserts value
function _assert(value: boolean, properties: Properties): asserts value
function _assert(value: boolean): asserts value
function _assert(value: boolean, ...parameters: CreateHttpErrorParameters): asserts value {
  httpAssert(value, ...(parameters as never[]))
}

/**
 * Tests for deep equality between `a` and `b`. Primitive values are
 * compared with the Abstract Equality Comparison (`==`). If `a` and `b`
 * are not equal, an `HttpError` is thrown that is constructed with the
 * given `status`, `message`, and `properties`.
 */
function deepEqual(a: unknown, b: unknown, status: Status, message: Message, properties: Properties): void
function deepEqual(a: unknown, b: unknown, status: Status, message: Message): void
function deepEqual(a: unknown, b: unknown, status: Status, properties: Properties): void
function deepEqual(a: unknown, b: unknown, status: Status): void
function deepEqual(a: unknown, b: unknown, message: Message, properties: Properties): void
function deepEqual(a: unknown, b: unknown, message: Message): void
function deepEqual(a: unknown, b: unknown, properties: Properties): void
function deepEqual(a: unknown, b: unknown): void
function deepEqual(a: unknown, b: unknown, ...parameters: CreateHttpErrorParameters): void {
  httpAssert.deepEqual(a, b, ...(parameters as never[]))
}

/**
 * Tests shallow, coercive equality between `a` and `b` using the Abstract
 * Equality Comparison (`==`). If `a` and `b` are not equal, an `HttpError`
 * is thrown that is constructed with the given `status`, `message`,
 * and `properties`.
 */
function equal(a: unknown, b: unknown, status: Status, message: Message, properties: Properties): void
function equal(a: unknown, b: unknown, status: Status, message: Message): void
function equal(a: unknown, b: unknown, status: Status, properties: Properties): void
function equal(a: unknown, b: unknown, status: Status): void
function equal(a: unknown, b: unknown, message: Message, properties: Properties): void
function equal(a: unknown, b: unknown, message: Message): void
function equal(a: unknown, b: unknown, properties: Properties): void
function equal(a: unknown, b: unknown): void
function equal(a: unknown, b: unknown, ...parameters: CreateHttpErrorParameters): void {
  httpAssert.equal(a, b, ...(parameters as never[]))
}

/**
 * Tests for deep equality between `a` and `b`. Primitive values are
 * compared with the Abstract Equality Comparison (`==`). If `a` and `b`
 * are equal, an `HttpError` is thrown that is constructed with the given
 * `status`, `message`, and `properties`.
 */
function notDeepEqual(a: unknown, b: unknown, status: Status, message: Message, properties: Properties): void
function notDeepEqual(a: unknown, b: unknown, status: Status, message: Message): void
function notDeepEqual(a: unknown, b: unknown, status: Status, properties: Properties): void
function notDeepEqual(a: unknown, b: unknown, status: Status): void
function notDeepEqual(a: unknown, b: unknown, message: Message, properties: Properties): void
function notDeepEqual(a: unknown, b: unknown, message: Message): void
function notDeepEqual(a: unknown, b: unknown, properties: Properties): void
function notDeepEqual(a: unknown, b: unknown): void
function notDeepEqual(a: unknown, b: unknown, ...parameters: CreateHttpErrorParameters): void {
  httpAssert.notDeepEqual(a, b, ...(parameters as never[]))
}

/**
 * Tests shallow, coercive equality between `a` and `b` using the Abstract
 * Equality Comparison (`==`). If `a` and `b` are equal, an `HttpError` is
 * thrown that is constructed with the given `status`, `message`, and
 * `properties`.
 */
function notEqual(a: unknown, b: unknown, status: Status, message: Message, properties: Properties): void
function notEqual(a: unknown, b: unknown, status: Status, message: Message): void
function notEqual(a: unknown, b: unknown, status: Status, properties: Properties): void
function notEqual(a: unknown, b: unknown, status: Status): void
function notEqual(a: unknown, b: unknown, message: Message, properties: Properties): void
function notEqual(a: unknown, b: unknown, message: Message): void
function notEqual(a: unknown, b: unknown, properties: Properties): void
function notEqual(a: unknown, b: unknown): void
function notEqual(a: unknown, b: unknown, ...parameters: CreateHttpErrorParameters): void {
  httpAssert.notEqual(a, b, ...(parameters as never[]))
}

/**
 * Tests strict equality between `a` and `b` as determined by the SameValue
 * Comparison (`===`). If `a` and `b` are equal, an `HttpError` is thrown
 * that is constructed with the given `status`, `message`, and `properties`.
 */
function notStrictEqual(a: unknown, b: unknown, status: Status, message: Message, properties: Properties): void
function notStrictEqual(a: unknown, b: unknown, status: Status, message: Message): void
function notStrictEqual(a: unknown, b: unknown, status: Status, properties: Properties): void
function notStrictEqual(a: unknown, b: unknown, status: Status): void
function notStrictEqual(a: unknown, b: unknown, message: Message, properties: Properties): void
function notStrictEqual(a: unknown, b: unknown, message: Message): void
function notStrictEqual(a: unknown, b: unknown, properties: Properties): void
function notStrictEqual(a: unknown, b: unknown): void
function notStrictEqual(a: unknown, b: unknown, ...parameters: CreateHttpErrorParameters): void {
  httpAssert.notStrictEqual(a, b, ...(parameters as never[]))
}

/**
 * Tests if `value` is truthy. If `value` is not truthy, an `HttpError`
 * is thrown that is constructed with the given `status`, `message`,
 * and `properties`.
 */
function ok(value: boolean, status: Status, message: Message, properties: Properties): asserts value
function ok(value: boolean, status: Status, message: Message): asserts value
function ok(value: boolean, status: Status, properties: Properties): asserts value
function ok(value: boolean, status: Status): asserts value
function ok(value: boolean, message: Message, properties: Properties): asserts value
function ok(value: boolean, message: Message): asserts value
function ok(value: boolean, properties: Properties): asserts value
function ok(value: boolean): asserts value
function ok(value: boolean, ...parameters: CreateHttpErrorParameters): asserts value {
  httpAssert.ok(value, ...(parameters as never[]))
}

/**
 * Tests strict equality between `a` and `b` as determined by the SameValue
 * Comparison (`===`). If `a` and `b` are not equal, an `HttpError`
 * is thrown that is constructed with the given `status`, `message`,
 * and `properties`.
 */
function strictEqual<T>(a: unknown, b: T, status: Status, message: Message, properties: Properties): asserts a is T
function strictEqual<T>(a: unknown, b: T, status: Status, message: Message): asserts a is T
function strictEqual<T>(a: unknown, b: T, status: Status, properties: Properties): asserts a is T
function strictEqual<T>(a: unknown, b: T, status: Status): asserts a is T
function strictEqual<T>(a: unknown, b: T, message: Message, properties: Properties): asserts a is T
function strictEqual<T>(a: unknown, b: T, message: Message): asserts a is T
function strictEqual<T>(a: unknown, b: T, properties: Properties): asserts a is T
function strictEqual<T>(a: unknown, b: T): asserts a is T
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
