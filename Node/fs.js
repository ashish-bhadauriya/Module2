let fs=require("fs");
console.log(fs);//file System

let path=require("path");

let filePath=path.join(__dirname,"file.txt");
console.log(filePath);

fs.writeFileSync(filePath,"Again writing to execting file !");