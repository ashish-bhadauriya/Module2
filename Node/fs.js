const { execFileSync } = require("child_process");
let fs=require("fs");
console.log(fs);//file System

let path=require("path");

let filePath=path.join(__dirname,"file.txt");
console.log(filePath);
console.log("Before update");
fs.writeFileSync(filePath,"Again writing to execting file !");


fs.appendFileSync(filePath,"\nNewly added content ");
console.log("afterUpdate");

console.log(fs.readFileSync(filePath,'utf-8'));

//fs.unlinkSync(filePath);//delete file
if(!fs.existsSync("hamariDirectory"))
fs.mkdirSync("hamariDirectory");
//Create a Directory
let folderPath=__dirname;
let contentOfFolder=fs.readdirSync(folderPath);
console.log(contentOfFolder);
