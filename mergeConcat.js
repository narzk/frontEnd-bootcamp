// input: 2 sorted arrays output: a sorted array

//[1,2,4] input 1
//[1,3,4] input 2
//[1,2,3,4,4] output

function merge(arr1, arr2) {
  let mergedArray = arr1.concat(arr2)
  //mergedArray:[1,2,4,1,3,4]
  mergedArray.sort((a,b)=>{
      if(a<b)return -1;
      if(b<a) return 1;
      return 0;
  })
  return mergedArray
}
const resultArray = merge([1, 2, 4], [1, 3, 4])
// console.log("result:", resultArray)

//Array Method

//Concat:
//Array1.concat(Array2)
//[Array1,Array2]
//Array2.concat(Array1)
//[Array2, Array1]


//sort
// function compareFn(a, b) {
//     if (a is less than b by some ordering criterion) {
//       return -1;
//     }
//     if (a is greater than b by the ordering criterion) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }


  let mergedArray=[1,2,4,1,3,4]
//   console.log(mergedArray.sort((a,b)=>{
//     if(a<b)return 1;
//     if(b<a) return -1;
//     return 0;
// }))
console.log(mergedArray.sort((a,b)=>{
  
    return a-b;
}))
console.log(mergedArray.sort((a,b)=>{
  
    return b-a;
}))
// console.log(mergedArray.sort((a,b)=>{
  
//     return a<b;
// }))
// console.log(mergedArray.sort((a,b)=>{
  
//     return b<a;
// }))