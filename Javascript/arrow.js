const user={
    username:"anant",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
        
        
    }
    
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);                         //here current context is {}



// function chai(){
//     let username="anant"
//     console.log(this.username);
    
// }
// chai()


const chai = () =>{
    let username="anant"
    console.log(this);
    
}
// chai()

const add=(n1,n2)=>{
    return n1+n2
}

// const add1=(n1,n2)=> n1+n2;              //used in react
const add2=(n1,n2)=> ({username:"anant"}) ;            

// console.log(add2(3,4))



// Immediately Invoked Function Expression (IIFE)

(function bhai(){          //named IIFE
    console.log(`DB connected`);
    
})();

( (name)=>{                  //simple IIFE
    console.log(`db connected to ${name}`);
    
})("anant");
