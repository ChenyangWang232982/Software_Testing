/**
 * Gives the absolute value of a number
 * @param {integer} 
 * @returns {initeger} Returns the absolute value of parameter value.
 * Throws:
 * TypeError when non-integers are used
 */


function absolute(value){
    if(!(Number.isInteger(value)))
    {
        throw new TypeError
    }

    if (value < 0)
    {
        return -1* value
    }
    if (value => 0)
    {
        return value
    }
}

//
//export default absolute
//
export {absolute}