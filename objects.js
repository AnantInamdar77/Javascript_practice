// singleton

//object literals
// Object.create

const sym=Symbol("key1")


const user={
    name:"Anant",   //key:value
    "Full name":"Anant Venkatesh Inamdar",    //this cannot be acccesed by .fulname method
    [sym]:"key1",
    age:19,
    location:"DWD",
    email:"Avi@gmail.com",
    isLoggedIn: false,
    lastLogoinDay:["mon","tue","wed","sun"]

}
//accesing the  object
console.log(user.email);
console.log(user["email"]);


// console.log(user["Full name"]);
console.log(typeof user.sys);    //string its not using like a symbol 
//to use this as a symbol we have to declear sys in [] braces

// console.log(user[sym]);
//important for interview to print the symbol as key value

user.email="anant@gmail.com"
// Object.freeze(user)     //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

//no changes can be done after this freeze 
// console.log(user.email);

// console.log(user);

user.greet=function(){
    console.log("hey user");

    
}

user.greet1=function(){
    console.log(`helo user,${this.name}`);

    
}
console.log(user.greet());
console.log(user.greet1());




//object in singleton or declearing with constructor
// const appuser=new Object()

const appuser={}
appuser.id="12ab"
appuser.name="Anant"
appuser.isLoggedIn=false
// console.log(appuser);

const regularuser={
    email:"blabla@gmail",
    fullname:{
        userfullname:{
            firstname:"Anant",
            lastname:"Inamdar"
        }

    }
}
console.log(regularuser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({} ,obj1,obj2)


const obj3={...obj1, ...obj2}
console.log(obj3);

const data=[
    {
        id:1,
        email:"vgc"
    },
    {
        password:"xxxxx"
    },
    {},{},
]

data[1].email
console.log(appuser);
console.log(Object.keys(appuser));
console.log(Object.values(appuser));

console.log(appuser.hasOwnProperty('isLoggedIn'))






// destuturing object 

const course={
    name:"js",
    price:"999",
    instuctor:"Hitesh"
}

// coourse.instuctor

const {instuctor}=course
console.log(instuctor);

const {price:paisa}=course        //destuctoring
console.log(paisa);




//json (brief intro)
{
//    " name":"js",
//     "price":"free",
//     "instuctor":"Hitesh"

}

[
    {},
    {},
    {}
]












