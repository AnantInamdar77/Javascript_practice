//Arrow Function

//1.Syntax
const sayHello=()=>{       //Arrow functions
    console.log('hey')
}

// const add=(a,b)=>{
// return a+b;    
// }

const add=(a,b)=>a+b;       // one liner

sayHello()
console.log(add(2,3))

// 2. 'arguments' keyword           //arguments is only defined in normal fuctn not the arrow function
const addNumbers=(...num)=>{
    console.log(num);
    }
    addNumbers(4,5,6,9,)

//3.Hoisting

sayhi();     // the fuctn is called before decleration or intialization 

function sayhi(){
    console.log("hiiiiiiiiii");
    
}

//but in arrow function its hoisting not availabel

//4 this keyword

const obj={
    value:20,
    myfunction:() => {
        console.log(this);   // this refers the obj in normala function
        // but in arrow function this refer to window object that is browser
        
    }
}
obj.myfunction()


