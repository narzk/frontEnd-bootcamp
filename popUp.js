//Question;
// input an array[1,2,3]
//output [[1,2], 3]

//clean code -> naming part
//uncle Bob-> video clean Code

//function def regular
function popUp(inputArray) {
  // return last element ,and delete last element
  //last index
  let lastIndex = inputArray.length - 1

  let lastElement = inputArray[lastIndex]

  let newArray = []
  for (i = 0; i < lastIndex; i++) {
    //delete last element

      newArray[i] = inputArray[i]
    //i=0 => newArray[0]=inputArray[0]=> newArray=[1]
    //i=1 => 1<3 => newArray=[1,2]
    //i=2 => 2<3 => newArray=[1,2,3]
    //i=3 =>3<3 reject
  }
  
  return [lastElement, newArray]
}
//O(n)
//arrow function
// const popUp = () => {
//   return
// }

// function Call
let originalArray = [1, 2, 3]
const result=popUp(originalArray)

console.log('result: ',result)
//Array Methods
//pop
// console.log(
// 'return of pop', originalArray.pop(), 'originalArray', originalArray
// )

//length

// console.log(
//   "length:",
//   originalArray.length,
//   "originalArray",
//   originalArray,
//   "last element:",
//   originalArray[originalArray.length - 1]
// )
