import 'should'

import httpErrors from 'http-errors'

import assert from './index'

function getError(func: () => unknown): unknown {
  try {
    func()
  } catch (error: unknown) {
    return error
  }
}

describe('ts-http-assert', function () {
  describe('different types of parameters', function () {
    it('(null)', function () {
      const error = getError(() => assert(false)) as Error
      httpErrors.isHttpError(error).should.be.true()
    })

    it('status', function () {
      const error = getError(() => assert(false, 404)) as Error
      httpErrors.isHttpError(error).should.be.true()
      error.should.has.property('status', 404)
    })

    it('status, message', function () {
      const error = getError(() => assert(false, 404, 'notfound')) as Error
      httpErrors.isHttpError(error).should.be.true()
      error.should.has.property('status', 404)
      error.should.has.property('message', 'notfound')
    })

    it('status, message, properties', function () {
      const error = getError(() => assert(false, 404, 'notfound', { foo: 'bar' })) as Error
      httpErrors.isHttpError(error).should.be.true()
      error.should.has.property('status', 404)
      error.should.has.property('message', 'notfound')
      error.should.has.property('foo', 'bar')
    })

    it('message', function () {
      const error = getError(() => assert(false, 'notfound')) as Error
      httpErrors.isHttpError(error).should.be.true()
      error.should.has.property('message', 'notfound')
    })

    it('message, properties', function () {
      const error = getError(() => assert(false, 'notfound', { foo: 'bar' })) as Error
      httpErrors.isHttpError(error).should.be.true()
      error.should.has.property('message', 'notfound')
      error.should.has.property('foo', 'bar')
    })

    it('properties', function () {
      const error = getError(() => assert(false, { foo: 'bar' })) as Error
      httpErrors.isHttpError(error).should.be.true()
      error.should.has.property('foo', 'bar')
    })
  })

  it('ts-http-assert', function () {
    const a: unknown = 5
    //@ts-expect-error: a is of unknown type
    a.toFixed(0).should.be.equal('5')
    assert(a === 5)
    a.toFixed(0).should.be.equal('5')
  })

  it('ts-http-assert.deepEqual', function () {
    assert.deepEqual({ foo: '5' }, { foo: 5 })
    const error = getError(() => assert.deepEqual({ foo: '5' }, { foo: 6 }))
    httpErrors.isHttpError(error).should.be.true()
  })

  it('ts-http-assert.equal', function () {
    assert.equal('5', 5)
    const error = getError(() => assert.equal('5', 6))
    httpErrors.isHttpError(error).should.be.true()
  })

  it('ts-http-assert.notDeepEqual', function () {
    assert.notDeepEqual({ foo: '5' }, { foo: 6 })
    const error = getError(() => assert.notDeepEqual({ foo: '5' }, { foo: 5 }))
    httpErrors.isHttpError(error).should.be.true()
  })

  it('ts-http-assert.notEqual', function () {
    assert.notEqual('5', 6)
    const error = getError(() => assert.notEqual('5', 5))
    httpErrors.isHttpError(error).should.be.true()
  })

  it('ts-http-assert.notStrictEqual', function () {
    const obj1 = {}
    const obj2 = {}
    assert.notStrictEqual(obj1, obj2)
    const error = getError(() => assert.notStrictEqual(obj1, obj1))
    httpErrors.isHttpError(error).should.be.true()
  })

  it('ts-http-assert.ok', function () {
    const a: unknown = 5
    //@ts-expect-error: a is of unknown type
    a.toFixed(0).should.be.equal('5')
    assert.ok(a === 5)
    a.toFixed(0).should.be.equal('5')
  })

  it('ts-http-assert.strictEqual', function () {
    const a: unknown = 5
    //@ts-expect-error: a is of unknown type
    a.toFixed(0).should.be.equal('5')
    assert.strictEqual(a, 5)
    a.toFixed(0).should.be.equal('5')
  })
})
