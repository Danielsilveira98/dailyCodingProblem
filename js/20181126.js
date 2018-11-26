/********************************************************************************
* Good morning! Here's your coding interview problem for today.                 *
*                                                                               *
* This problem was recently asked by Google.                                    *
*                                                                               *
* Given a list of numbers and a number k, return whether any two numbers from   *
* the list add up to k.                                                         *
*                                                                               *
* For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.*
*                                                                               *
* Bonus: Can you do this in one pass?                                           *
*                                                                               *
* Upgrade to premium and get in-depth solutions to every problem.               *
*                                                                               *
* If you liked this problem, feel free to forward it along so they can subscribe*
* here! As always, shoot us an email if there's anything we can help with!      *
*********************************************************************************/

const solution = (k, list) => {
  result = []
  for (let index = 0; index < list.length; index++) {
    let el = list[index];
    let s = k -el
    if (list.indexOf(s) != -1) {
      result = [el, s]
      index = list.length
    }
  }
  return result
}