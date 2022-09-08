import { describe, expect, it } from 'vitest'

const fizzbuzz = (number) => {
    if (typeof number !== 'number') throw new Error('Parameter provided must be a number')
    if (Number.isNaN(number)) throw new Error('Parameter provided must be a number')
    return number
}

describe('fizzbuzz', () => {
    it('Should be a function', () => {
        expect(typeof fizzbuzz).toBe('function')
    })
    it('Should throw if not number is provided as parameter', () => {
        expect(() => fizzbuzz().toThrow())
    })
    it('Should throw a specific error message if not number is provided as parameter', () => {
        expect(() => fizzbuzz().toThrow('Parameter provided must be a number'))
    })
    it('Should throw a specific error message if not number is provided as parameter', () => {
        expect(() => fizzbuzz(NaN).toThrow('Parameter provided must be a number'))
    })
    it('Should return 1 if number provided is 1'), () => {
        expect(fizzbuzz(1).toBe(1))
    }
    it('Shoul return fizz if number provided is 3'), () => {
        expect(fizzbuzz(3).toBe('fizz'))
    }
})
