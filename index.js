// const arr = ['laptop', 'mouse', 'keyboard'];
// arr[3] = 'music';
// arr[4] = 'Adapter';
// console.log(typeof arr);
// console.log(arr.sort()[0]);

// console.log(arr[arr.length - 1]);

// const newArr = new Array('shakil', 'hossain');
// console.log('this is object arr=>', newArr[0]);

// for (let i = 0; i < arr.length; i++) {
//     const result = arr[i];
//     if (result !== undefined) {
//         console.log(arr[i]);
//     }
// }

const fruits = ['apple','orange','mango','jackfruit'];
fruits.forEach(myFunction);

function myFunction(item,index,arr) {
    console.log(item);
}

console.log(Array.isArray(fruits)); //Eechma 5
console.log(fruits instanceof Array); // check is array? 
