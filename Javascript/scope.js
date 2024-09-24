// var  c=390
let a=110

if(true){
    let a=10;
    const b=20
    c=6;
    // console.log("inner",a);
    
}
// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const username="anant"

    function two(){
        const website="youtube"
        // console.log(username);
        
    }
    // console.log(website);

    two()
    
}
one()

if(true){
    const username="anant"
    if(username=== "anant"){
        const website=" youtube"
        // console.log(username+ website);
        
    }
    // console.log(website);
    
}
// console.log(username);


//****************interesting************************** */

console.log(add1(5))
function add1(n1){
    return n1+1
}
// add1(5)


console.log(add2(5));

//in this can't accesss before intialization

const add2=function(n1){
    return n1+2
}
// add2(5)

