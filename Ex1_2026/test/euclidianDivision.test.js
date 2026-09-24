import { expect } from 'chai'
import { euclideanDivision } from '../src/euclideanDivision.js'
import * as td from 'testdouble'

let absoluteStub, SUT

describe('euclideanDivision_input', () => {
    it('Should be Integer - positive', () => {
        const result = euclideanDivision(7,3)
        expect(result).to.deep.equal({quotient: 2, remainder:1})
    })

    it('Should be Integer - positive', () => {
        const result = euclideanDivision(2,1)
        expect(result).to.deep.equal({quotient: 2, remainder:0})
    })

    it('Should be Integer - positive', () => {
        const result = euclideanDivision(-10,4)
        expect(result).to.deep.equal({quotient: -3, remainder:2})
    })

    it('Should be Integer - negative', () => {
        expect(() => euclideanDivision(7,2.5)).to.throw(TypeError)
    })

    it('Should be Integer - negative', () => {
        expect(() => euclideanDivision(7.5,2)).to.throw(TypeError)
    })

    it('Should be Integer - negative', () => {
        expect(() => euclideanDivision(7,0)).to.throw(RangeError)
    })

    it('Should be Integer - negative', () => {
        expect(() => euclideanDivision('7',2.5)).to.throw(TypeError)
    })
})


describe('euclideanDivision with stubbed absolute', () => {
    beforeEach(async function () {
        absoluteStub = await td.replaceEsm('../src/helpers/absolute.js')
        SUT = await import('../src/euclideanDivision.js')
    })

    afterEach(function () {
        td.reset()
    })

    it('should divide using stubbed absolute (7, 3)', () => {
        td.when(absoluteStub.absolute(-7)).thenReturn(7)
        td.when(absoluteStub.absolute(3)).thenReturn(3)

        const result = SUT.euclideanDivision(-7, 3)
        expect(result).to.deep.equal({ quotient: -3, remainder: 2 })
    })

    it('should divide using stubbed absolute (-10, 4)', () => {
        td.when(absoluteStub.absolute(-10)).thenReturn(10)
        td.when(absoluteStub.absolute(4)).thenReturn(4)

        const result = SUT.euclideanDivision(-10, 4)
        expect(result).to.deep.equal({ quotient: -3, remainder: 2 })
    })
})