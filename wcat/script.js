#!/usr/bin/env node
// //we are working in node environment
// const fs = require("fs"); //i dont want to change fs thats why used const

// let filename = process.argv[2]; //name of file which I want to read
// //0th  index : node ka address
// //1st index : script.js ka address (file ka address)
// //process.argv : is an array
// //second index se input milne shuru ho jaate hai

// let data = fs.readFileSync(filename, "utf-8");
// // console.log(data);

// //how to read multiple files
// let filename2 = process.argv[3];
// let data2 = fs.readFileSync(filename2, "utf-8");
// console.log(data + "\n" + data2);

const fs = require("fs");

let processData = process.argv;


let iUpdated = false;
if(processData[2] == "w") {
    fs.writeFileSync(processData[3], processData[4]);
} else if(processData[2] == "a") {
    let previousData = fs.readFileSync(processData[3], "utf-8");
    fs.writeFileSync(processData[3], previousData + "\n" + processData[4]);
} else {
    let data = "";
    for(let i = 2; i < processData.length; i++) {
        if(processData.includes("ne")) {
            if(!iUpdated) {
                i = i + 1;
                iUpdated = true;
            }
            let tempData = fs.readFileSync(processData[i], "utf-8");
            let lines = tempData.split("\n");
            if(tempData.includes("\r")) {
                lines = tempData.split("\r\n");
            }
            let finalData = "";
            for(let j = 0; j < lines.length; j++) {
                if(lines[j] != '') {
                    finalData += lines[j] + "\n";
                }
            }
                data += finalData;
    } else{
            data += fs.readFileSync(processData[i], "utf-8") + "\n";
        }
    }
        console.log(data); 
}
    





