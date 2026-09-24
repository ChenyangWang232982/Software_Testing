/**
 * Sums two numbers
 * @param {integer} augend The first integer in an addition.
 * @param {integer} addend The second integer in an addition.
 * @returns {initeger} Returns the total.
 * Throws:
 * TypeError when non-integers are used
 */


function sum(augend,addend){
    if(!(Number.isInteger(augend)) || !(Number.isInteger(addend)))
    {
        throw new TypeError
    }
    return augend+addend
}

//
//export default sum
//
export {sum}