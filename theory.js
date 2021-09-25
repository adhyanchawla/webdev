let a = 10; //variable creation //can be float, boolean, string
//console.log(a); //print statement

for(let i = 0; i < 10; i++) { //for loop
    if(i % 2 == 0) {
        //console.log('even', i);
    } else {
        //console.log('odd', i);
    }
}

//let i = 5;

//conditional statement
// if(i % 2 == 0) {
//     //console.log('even');
// } else {
//     //console.log('odd');
// }

//while loop
// while(i-->0) {
//     //console.log(i);
// }

//array
let arr = [1, 2, 3, 4, 'bhavesh', 10.5, true];
console.log(arr[arr.length - 1]);

arr.push('hello'); //add at last index
//console.log(arr);
arr.pop();
//console.log(arr); //remove at last index
arr[4] = "adhyan";

//creation of new array
let arr1 = new Array(10);
//console.log(arr1);

const arr2 = [1,2,3,4,5];
// arr2 = []; //re assignment not allowed using const

//return the max freq element in the given array
let arr3 = [1,2,3,1,1,2,1,2,3,4,1,2,2,1];

let me = 0;
let maxCount = 0;

for(let i = 0; i < arr3.length; i++) {
    let count = 1;
    for(let j = i + 1; j < arr3.length; j++) {
        if(arr3[i] == arr3[j]) {
            count++;
        }
    }

    if(count > maxCount) {
        maxCount = count;
        me = arr3[i];
    }
}

console.log(me);


//concatenation
let str = "";
let arr4 = ["red", "green", "white"];

for(let i = 0; i < arr4.length; i++) {
    str += arr4[i];
}

console.log(str);

//sum of 2D arrays
let arr5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let sum = 0;

for(let i = 0; i < arr5.length; i++) {
    for(let j = 0; j < arr5[i].length; j++) {
        sum += arr5[i][j];
    }
}
console.log(sum);

let k = 0;
let arr6 = [];
for(let i = 0; i < arr5.length; i++) {
    for(let j = 0; j < arr5[0].length; j++) {
        arr6.push(arr5[i][j]);
    }
}

console.log(arr6);

//print arr with every element inc by 2
let arr7 = [1,2,3,4];

// for(let i = 0; i < arr7.length; i++) {
//     arr7[i] += 2;
// } 

console.log(arr7);

//functions in JS
function abc() {
    console.log("hello world");
}

abc();

//map function
function print(d, i) {
    console.log(d, i);
}

arr7.map(print);

//addTwo
function addTwo(d, i) {
    return d + 2;
}

arr7 = arr7.map(addTwo);
console.log(arr7);


//given an array remove all the even items
let arr8 = [1,2,3,4,5,6,7,8];
let arr9 = [];

// for(let i = 0; i < arr8.length; i++) {
//     if(arr8[i] % 2 != 0) {
//         arr9.push(arr8[i]);
//     }
// }

// console.log(arr9);

//filter method
function removeEven(data, index) {
    return data % 2 != 0;
}

arr9 = arr8.filter(removeEven);
console.log(arr9);

