// input: 2 sorted arrays output: a sorted array

//[1,2,4] input 1
//[1,3,4] input 2
//[1,1,2,3,4,4] output


//complexity sort => JS 

//bubble sort
//insertion sort
//selection sort
//merge sort


//built in methods NO
function mergeWithNoJSMethods(arr1, arr2){

    let newArray=[]

    //concat 
for(let i=0; i<arr1.length;i++){
    newArray[i]=arr1[i]
}
//newArray=[1,2,4]
for(let j=0; j<arr2.length; j++){
//arr2=[1,3,4]
//newArray[arr1.length]=arr2[0]
//newArray[arr1.length+1]=arr2[1]
//newArray[arr1.length+2]=arr2[2]

    newArray[j+arr1.length]=arr2[j]


    //j=0 -> newArray[0+3]=arr2[0]->[1,2,4,1]
    //j=1 -> newArray[1+3]=arr2[1]->[1,2,4,1,3]
    //j=2 -> newArray[2+3]=arr2[2]->[1,2,4,1,3,4]
    //j=3 -> reject
}


// return newArray

for(let i=0; i<arr2.length; i++){
    arr1[arr1.length]=arr2[i]
}
console.log('***', arr1)

}
let myarr1=[1,2,4];
let myarr2=[1,3,4];
mergeWithNoJSMethods(myarr1 , myarr2)