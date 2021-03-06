/********************************************************************************
* This problem was asked by Uber.                                               *
*                                                                               *
* Given an array of integers, return a new array such that each element at index*
* i of the new array is the product of all the numbers in the original array    *
* except the one at i.                                                          *
*                                                                               *
* For example, if our input was [1, 2, 3, 4, 5], the expected output would be   *
* [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would  *
* be [2, 3, 6].                                                                 *
*                                                                               *
* Follow-up: what if you can't use division?                                    *
*********************************************************************************/

const resolution = list => {
  return list.map( el => {
    return list.reduce((tot, act) => tot * act , 1) / el
  })
}

const resolutionWithBonus = list => {
  return list.map( (el, i) => {
    return list.reduce((tot, act, i2) => i2 != i ? tot * act : tot , 1)
  })
}
