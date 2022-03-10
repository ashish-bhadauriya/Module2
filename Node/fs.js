let fs=require("fs");
console.log(fs);//file System

let path=require("path");

let filePath=path.join(__dirname,"file.txt");
console.log(filePath);
console.log("Before update");
fs.writeFileSync(filePath,"Again writing to execting file !");


fs.appendFileSync(filePath,"Newly added content ");
console.log("afterUpdate");

console.log(fs.readFileSync(filePath,'utf-8'));

//fs.unlinkSync(filePath);//delete file