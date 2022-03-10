//"C:\Users\Lenovo\Desktop\Fjp6\Module2\Node\path.js"
let path=require("path");
// console.log(path);

// let exetensionName=path.extname("C:\Users\Lenovo\Desktop\Fjp6\Module2\Node\path.js");
// console.log(exetensionName);

// let baseName=path.basename("C:\Users\Lenovo\Desktop\Fjp6\Module2\Node\path.js");
// console.log(baseName);

// console.log(__filename);
// console.log(__dirname);
let dirPath=__dirname
console.log(dirPath);
let newFilePath=path.join(dirPath,"test.js");
console.log(newFilePath);