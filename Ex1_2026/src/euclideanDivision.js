/**
 * Divides two numbers using Euclidean division.
 * It must follow the convention where remainder is always non-negative.
 * @param {number} dividend The dividend (number to be divided)
 * @param {number} divisor The divisor (number that divides)
 * @returns {Object} Returns an object that contains the 
 * quotient and remainder in the format of {'quotient': quotient, 'remainder': remainder}
 * 
 * euclideanDivision(7,3)
 * // => {'quotient': 2, 'remainder': 1}
 * 
 * euclideanDivision(7,-3)
 * // => {'quotient': -2, 'remainder': 1}
 * 
 * euclideanDivision(-7,3)
 * // => {'quotient': -3, 'remainder': 2}
 * 
 * euclideanDivision(-7,-3)
 * // => {'quotient': 3, 'remainder': 2}
 * 
 * How to check new numbers: dividend = divisor*quotient + remainder
 * 
 * Throws: 
 * TypeError when non-integers are used
 * RangeError when dividing with zero
 * 
 */
//import abs from "./abs.js"
//import { abs } from 'mathjs'
import { absolute } from "./helpers/absolute.js"



function euclideanDivision(dividend, divisor){
    if(!(Number.isInteger(dividend)) || !(Number.isInteger(divisor)))
    {
        
        throw new TypeError
    }
    /*
    // Buggy version where the closing bracket of !(isNum(dividend) )<- is missing
    // and is placed at the end of the row, making the 1st negation to apply to the 
    // whole statement
    if(!(Number.isInteger(dividend) || !(Number.isInteger(divisor))))
    {
        
        throw new TypeError
    }
    */
    if (divisor === 0)
    {
        throw new RangeError
    }
    var quotient = 0
    var absDividend = absolute(dividend)
    //console.log(absDividend)
    var absDivisor = absolute(divisor)
    //console.log(absDivisor)

    while (absDividend >= absDivisor)
    {
        absDividend -= absDivisor
        quotient++;
        //console.log("quotient = ", quotient)
    }

    var isNegativeQuotient = (dividend < 0) !== (divisor <0 );
    if (isNegativeQuotient) {
        //console.log("is negative Q", -quotient)
        quotient = -quotient
    }
    var remainder = absDividend;
    if (dividend<0 && remainder !== 0)
    {
        //console.log("quotient", quotient)
        remainder = absDivisor - remainder;
        
        //Fix for copilot's code
        /*if(divisor<0) 
        {
            quotient += 1
        }
        else
        {
            quotient -= 1
        }*/

        // original copilot code
        quotient -= 1
        

    }

    return {
        'quotient': quotient,
        'remainder': remainder
    }


}

export { euclideanDivision }






/*let quotient = 0;
let absDividend = dividend < 0 ? -dividend : dividend;
let absDivisor = divisor < 0 ? -divisor : divisor;

// Perform division using repeated subtraction
while (absDividend >= absDivisor) {
    absDividend -= absDivisor;
    quotient++;
}

// Determine the sign of the quotient
const isNegativeQuotient = (dividend < 0) !== (divisor < 0);
if (isNegativeQuotient) {
    quotient = -quotient;
}

// Adjust remainder to always be non-negative
let remainder = absDividend;
if (dividend < 0 && remainder !== 0) {
    remainder = absDivisor - remainder;
    quotient -= 1;
}

return {
    quotient: quotient,
    remainder: remainder
};*/

//return {'quotient': 2, 'remainder': 1}