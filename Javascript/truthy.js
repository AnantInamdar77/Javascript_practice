const email=[]
if (email) {
    console.log("got user email");
    }
else{
    console.log("dont have user email");
    
}    

/* In tha above example we did not compared the in th condition it was email a string which is assumed to be true*/


//Falsy Values 
/* false, 0 ,-0 , BigInt 0n,   "", null, undefined, NaN

Truthy value
true ,"0",'false' , " ",[],{},function(){}  ,
*/

// if (email.length ===0) {
//     console.log("Array is empty");
    
    
// }


const obj={}

if (Object.keys(obj).length===0) {

    console.log("object is empty");

    
    
}




//Nullish Coalescing Operator(??): null undefined

let val1;
// val1=5??10
// val1=null ?? 10
// val1=undefined?? 15
val1=null ??10??50
console.log(val1);

//Terniary Operator
// condition? true:false

const price=100
price<=80?console.log("less than 80") : console.log("more than 80");



