// For 
// ForEach
//  For In
// If 
// while
// Bubble sort
// Switch case
// array


const mainArray = [1, 2, 3, 4];


// pop up last element, 

//پاک کردن از آخر آرایه
function pop(arr) {
  let temp = [];
  let deleted_item;

  for (let i = 0; i < arr.length - 1; i++) {
    temp[i] = arr[i];
  }

  // آخرین عنصر از آرایه جدا شده و در متغیر جداگانه نگهداری میشود
  for (let j = arr.length; j >= arr.length - 1; j--) {
    deleted_item = arr[j];
  }
  return [temp, deleted_item];
}

// اضافه کردن به ابتدای آرایه
function unshift(arr, item) {
  let temp = [];
  temp[0] = item;
  for (let i = 0; i <= arr.length; i++) {
    temp[i + 1] = arr[i];
  }
  return temp;
}

let [arrayAfterPop, deletedvalue] = pop(mainArray);
let arrayAfterUnShift = unshift(mainArray, 0);
console.log(
  `array after pop value is :${[arrayAfterPop]} and deleted item is ${[
    deletedvalue,
  ]}`
);
console.log(`array after unshift value is :${arrayAfterUnShift}`);