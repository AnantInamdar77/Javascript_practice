/*Primitive data types
 7 types: String ,number,boolean ,null,undefined,Symbol,BigInt */


//  Javascipt is Dynamically typed language

 
 const sc=100;
 const val=100.3
 const ln=false;
 const tep=null;
 let mail;

 const id=Symbol('123')
 const id1=Symbol('123')
 console.log(id=== id1);
 
/*Reference (non-primitive)
 Array, object , functions */

 const hero=["shaktiman" ,"doga","nagraj"]   //array

let Obj= {
    name:"anant",
    age:19
 }                //object


 const func=function(){
    console.log("Hello world");
    

 }
 func();


 console.log(typeof hero);
 console.log(typeof null);
 console.log(typeof undefined);
 console.log(typeof avi);
 
 
 
 //************memory allocation in Javascript**************************************
 
//Stack (primitive), Heap (Non-primitive)

let nam="Anant.com"
let nam1=nam
 nam1="shashank.com"
console.log(nam);
console.log(nam1);




let user={
    emali:"user@gmail.com,",
    upi:"user@ybl"

}

let user1=user;
user1.emali="avi@gmail.com"
console.log(user.emali);
console.log(user1.emali);


