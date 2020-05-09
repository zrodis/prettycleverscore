import { calculateBlue } from '../src/score'

describe('calculateBlue', () => {
    it('calculates the score for the blue boxes', () => {
        expect(calculateBlue({ quantity: 0 })).toEqual(0)
    })
})
