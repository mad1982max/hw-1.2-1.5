'use strict'

const cars = require('./data/cars') // IMMUTABLE. DON'T CHANGE cars
const customers = require('./data/customers') // IMMUTABLE. DON'T CHANGE customers
const dealerships = require('./data/dealerships') // IMMUTABLE. DON'T CHANGE dealerships
const orders = require('./data/orders') // IMMUTABLE. DON'T CHANGE orders

// Array's task

// Method's signature is immutable and cannot be changed.
// Defaults should be implemented.

// TASK #1

/**
 *  SUBTASK #1
 * 
 * This is a Grouping logic. In this example it means that * - unique field and ** - an array of unique values.
 * 
 * Should return an array with the next structure: 
 * [
 *      {
 *          dealershipId: number, // *
 *          name: string,
 *          state: string,
 *          cars: [
 *              {
 *                  make: string, // *
 *                  models: [
 *                      {
 *                          model: string, // *
 *                          displayNames: [string, ...] // **
 *                      }, ...
 *                  ]
 *              }, ...
 *          ]
 *      }, ...
 * ]
 * @returns {Array}
 */
const subtask1 = () => {
    return []
}

/**
 *  SUBTASK #2
 * 
 * Should return an array with the next structure: 
 * [
 *      {
 *          dealershipId: number, // *
 *          name: string,
 *          state: string,
 *          sellingArea: [
 *              {
 *                  state: string, // *
 *                  customerIds: [string, ...] // **
 *              }, ...
 *          ]
 *      }, ...
 * ]
 * 
 * @returns {Array}
 */
const subtask2 = () => {
    return []
}

/**
*  SUBTASK #3
* 
* Should return an array with the next structure: 
* [
*      {
*          dealershipId: number, // *
*          name: string,
*          state: string,
*          carIds: [string, ...] <--- cars should be sorted by fields in the next priority : [make -> model -> displayName] (all ASC) 
*      }, ...
* ]
* 
* @returns {Array}
*/
const subtask3 = () => {
    return []
}

/**
 * SUBTASK #4
 * 
 * @param {Array} list an array from subtask #3
 * @returns {Array} sorted array from subtask #3 by the next prio of fields : [state -> count of carIds] (ASC -> DESC)
 */
const subtask4 = (list) => {
    return []
}

/**
 * SUBTASK #5
 * 
 * @param {number} minId [default = 100000]
 * @param {number} maxId [default = 100200]
 * @param {boolean} isReversed if set to true then reverse task logic (IN -> NOT IN)
 * @returns {Array} the same result as in subtask #3 but this logic should work only with those dealership whose dealershipId IN (NOT IN) [minId, maxId]
 */
const subtask5 = (minId, maxId, isReversed) => {
    return []
}

/**
 * Should return all dealerships (new list) who has enough cars (dealership.carIds > minCarsCount).
 * 
 * @param {Array} list 
 * @param {number} minCarsCount [default = 100]
 * @returns {Array} filtered dealersips 
 */
const subtask6 = (list, minCarsCount) => {
    return []
}

console.time('subtask #1')
const result1 = subtask1()
console.timeEnd('subtask #1')
console.log('subtask #1 result: ', JSON.stringify(result1[0], null, 2), JSON.stringify(result1[result1.length - 1], null, 2))

console.time('subtask #2')
const result2 = subtask2()
console.timeEnd('subtask #2')
console.log('subtask #2 result: ', JSON.stringify(result2[0], null, 2), JSON.stringify(result2[result2.length - 1], null, 2))

console.time('subtask #3')
const result3 = subtask3()
console.timeEnd('subtask #3')
console.log('subtask #3 result: ', JSON.stringify(result3[0], null, 2), JSON.stringify(result3[result3.length - 1], null, 2))

console.time('subtask #4')
const result4 = subtask4(result3)
console.timeEnd('subtask #4')
console.log('subtask #4 result: ', JSON.stringify(result4[0], null, 2), JSON.stringify(result4[result4.length - 1], null, 2))

console.time('subtask #5')
const result5 = subtask5()
console.timeEnd('subtask #5')
console.log('subtask #5 result: ', JSON.stringify(result5[0], null, 2), JSON.stringify(result5[result5.length - 1], null, 2))

console.time('subtask #6')
const result6 = subtask6(result3)
console.timeEnd('subtask #6')
console.log('subtask #6 result: ', JSON.stringify(result6[0], null, 2), JSON.stringify(result6[result6.length - 1], null, 2))


module.exports = {
    subtask1,
    subtask2,
    subtask3,
    subtask4,
    subtask5,
    subtask6
}