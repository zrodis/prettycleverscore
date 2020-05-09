import { calculatePurple } from '../src/score'

describe('calculatePurple', () => {
    it('calculates the score for the green boxes', () => {
        expect(calculatePurple({ values: [4, 5, 1, 4, 0] })).toEqual(14)
        expect(calculatePurple({ values: [6, '6'] })).toEqual(12)
        expect(calculatePurple({ values: [6, '', ''] })).toEqual(6)
    })
})
