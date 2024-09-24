// function myname(){
// console.log("A");
// console.log("N");
// console.log("A");
// console.log("N");
// console.log("T");

// }
// myname()

// function add(n1,n2){     //***********(parameters)**************
//     console.log(n1+n2);
    

// } 
// tis gives result:undefined becuz of the no return value 


function add(n1,n2){     
//    let result=n1+n2;
   return n1+n2
//    console.log("bfhuwegru");   //will not execute 
   
    }
const sum=add(3,4)      //(arguments)
console.log("result:" ,sum)

function pro(n1,n2){
    return n1*n2;
}
console.log(pro(4,3))

function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("please entre a user name");
        return
        

    }
    return `${username} just loggedin`
}
// console.log(loginUserMessage("Anant"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...n1){
         return n1
}
console.log(calculateCartPrice(200,500,600,890,765,790));

const av={
    username:"anant",
    price:199
}
function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject({
    username:"sam",
    price:399
})

const myNewrray=[200,400,900,600]
function returnvalue(getArray){
    return getArray[1]

}
console.log(returnvalue(myNewrray));




