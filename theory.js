let a = 10; //variable creation //can be float, boolean, string
console.log(a); //print statement

for(let i = 0; i < 10; i++) { //for loop
    if(i % 2 == 0) {
        console.log('even', i);
    } else {
        console.log('odd', i);
    }
}

let i = 5;

//conditional statement
if(i % 2 == 0) {
    console.log('even');
} else {
    console.log('odd');
}

//while loop
while(i-->0) {
    console.log(i);
}

//array
let arr = [1, 2, 3, 4, 'bhavesh', 10.5, true];
console.log(arr[arr.length - 1]);

arr.push('hello'); //add at last index
console.log(arr);
arr.pop();
console.log(arr); //remove at last index
arr[4] = "adhyan";

//creation of new array
let arr1 = new Array(10);
console.log(arr1);

const arr2 = [1,2,3,4,5];
// arr2 = []; //re assignment not allowed using const



 