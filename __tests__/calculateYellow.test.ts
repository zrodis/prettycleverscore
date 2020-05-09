import { calculateYellow } from '../src/score'

describe('calculateYellow', () => {
    it('calculates the score for the blue boxes', () => {
        expect(calculateYellow({ values: [10, '', '', 20] })).toEqual(30)
        expect(calculateYellow({ values: [10, 14, 16, 20] })).toEqual(60)
    })
})
