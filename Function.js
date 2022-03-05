/*
function sayHello()
{
    console.log("Hello from function");
}
sayHello();
*/
//Function parameter
/*
function add(a,b)
{
    console.log(a+b);
}
add(12,2);
*/
//function with return type 
/*
function multiply(num1,num2)
{
    return (num1*num2);
}
let ans=multiply(3,5);
console.log(ans);
*/
// Function store
/*
let a=function sub(num1,num2)
{
    return num1-num2;
}
console.log(a(10,4));
*/
//let a=10;
/*
function Check(a){
    if(a%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
Check(11);
*/
//IIFE ->Immediately Invoked function Expression
(function(){
    console.log("HEllo from IIFE");
})();

//IIFE Parameter
(function(num1,num2){
    console.log(num1/num2);
})(10,5);