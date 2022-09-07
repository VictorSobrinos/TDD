import { describe, expect, it } from 'vitest'

const fizzbuzz = (number) => {
    if (typeof number !== 'number') throw new Error('Parameter provided must be a number')
}

describe('fizzbuzz', () => {
    it('Should be a function', () => {
        expect(typeof fizzbuzz).toBe('function')
    })
    it('Should throw if not number is provided as parameter', () => {
        expect(() => fizzbuzz().toThrow())
    })
    it('Should throw a specific error message if not number is provided as parameter', () => {
        expect(() => fizzbuzz().toThrow())
    })
})
