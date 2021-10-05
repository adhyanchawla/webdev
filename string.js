let abc = 123;
let muName = `bhavesh${abc}`;
console.log(muName[7]);

let str = "bhavesh";
// for(let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

//decimal to binary
let num = "64";
let str1 = "";

while(parseInt(num) != 0) {
    str1 = (parseInt(num) % 2) + str1;
    num = parseInt(num) / 2;
}

console.log(str1);

//binary to decimal
let ans = 0;
let str2 = "1010";
let i = str2.length - 1;
let pow = 0;
while(i >= 0) {
    ans += Math.floor(str2[i]) * Math.pow(2, pow);
    i--;
    pow++;
}

console.log(ans);

//convert to upper case
let string = "bhavesh bansal";
let arr = string.split(" ");
let fans = "";
for(let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let char1 = str[0].toUpperCase();
    fans +=  char1 + str.substring(1) + " ";
}

function reverseStringWord(str3) {
    let ans = "";
    let arr = str3.split(" ");

    for(let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        for(let j = ele.length - 1; j >= 0; j--) {
            ans += ele[j];
        }
        ans += " ";
    }
    return ans;
}

console.log(reverseStringWord("My name is Bhavesh"));

//to check whether string is palindrome or not
function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    while(i <= j) {
        if(s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
} 

console.log(isPalindrome("adhyan"));

console.log(fans);


let string1 = "adfgashfdagh";

let obj = {};

for(let i = 0; i < string1.length; i++) {
    if(obj[string1[i]] == undefined) {
        obj[string1[i]] = 1;
    } else {
        obj[string1[i]]++;
    }
}

//let ans = 0;

let str4 = "abcade";
let obj1 = {};

for(let i = 0; i < str4.length; i++) {
    if(obj1[str4[i]] == undefined) {
        obj1[str4[i]] = 1;
    } else {
        obj1[str4[i]]++;
    }
}

let a = "";
for(let i = 0; i < str4.length; i++) {
    if(obj1[str4[i]] == 1) {
        a = str4[i]; 
        break;
    }
}

console.log(a);

console.log(obj);
