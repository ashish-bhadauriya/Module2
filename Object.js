//Empty Object
let obj={};
console.log(obj);


let ObjName={
    FirstName:"Ashish",
    LastName:"Singh",
    Age:20,
    PhoneNum:9670984783
}
console.log(ObjName);

let capAmerica={
    Name:'Steave',
    Age:99,
    isAvenger:false,
    friends:['Natsa','Thor','Tony','Bucky'],
    address:{
        city:"Queen",
        State:"UtterPradesh",
    },
    SayHi:function(){
        console.log("Caption America say Hii");
    }
}
console.log(capAmerica);
//Name of Cap America
console.log(capAmerica.Name);

//Age of cap America
console.log(capAmerica.Age);
//Address of caption america
console.log(capAmerica.address);

//City of cap America
console.log(capAmerica.address.city);

//console.log(capAmerica.SayHi());
capAmerica.SayHi();
//Add a new key to Object
// console.log("Before adding ",capAmerica);
// capAmerica.Movies=['Avengers','civilWar','Endgame'];
// console.log("after adding ",capAmerica);
//console.log(capAmerica);
capAmerica.isAvenger=true;
console.log(capAmerica);

capAmerica.address.State="USA";
console.log(capAmerica);
console.log(capAmerica.Name);
console.log(capAmerica['Name']);