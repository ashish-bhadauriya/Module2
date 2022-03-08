let num=51;
let count=1;
for(let i=2;i*i<=num;i++){
    if(num%i==0){
        count++;
    }
}
    if(count==1){
        console.log("prime");
    }else{
        console.log("Not prime");
    }
