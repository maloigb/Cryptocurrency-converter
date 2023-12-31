import { calculateAthState } from "@/system/utils";



describe('calculateAthState', () => {
    test('should calculate from/to ATH', () => {
        const expected = {
            fromAth: -50,
            toAth: 100, 
        }
        const result = calculateAthState(100, 50)
        expect(result).toEqual(expected)
    })
    test('should calculate from/to ATH with zero values', () => {
        const expected = {
            fromAth: 0,
            toAth: 0, 
        }
        const result = calculateAthState(0, 0)
        expect(result).toEqual(expected)
    })
    test('should calculate from/to ATH without passing currentPrice', () => {
        const expected = {
            fromAth: -100,
            toAth: 100, 
        }
        const result = calculateAthState(1)
        expect(result).toEqual(expected)
    })
    test('should calculate from/to ATH without passing any arguements', () => {
        const expected = {
            fromAth: 0,
            toAth: 0, 
        }
        const result = calculateAthState()
        expect(result).toEqual(expected)
    })
})