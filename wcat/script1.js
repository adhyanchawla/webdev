#!/usr/bin/env node
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
            let tempData = fs.readFileSync(processData[i], "utf-8");
            let lines = tempData.split("\n");
            if(tempData.includes("\r")) {
                lines = tempData.split("\r\n");
            }
            let finalData = "";
            for(let j = 0; j < lines.length; j++) {
                if(!iUpdated) {
                    i = i + 1;
                    iUpdated = true;
                }
                if(lines[j] != '') {
                    data += "\n" + lines[j];
                }
            }
                finalData += data;
                console.log(finalData);
    } else {
            data += fs.readFileSync(processData[i], "utf-8") + "\n";
        }
    }
        console.log(data); 
    }
    
    


        

