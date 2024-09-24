//if stmt:SYNTAX:----

// if (condition){

// }

let age=78;
if(2=="2"){
    // console.log("Eligible for voting");
    
}

// comparision oprarator:    < ,  > ,<=,>= , =(assignment) ,==(check), !=,  ===(strict equal checks datatype and value also ex:2="2" is true),  !==

if(age>18){
    console.log("Eligible for voting");
    
}
else{
    console.log("not eligible");
    
}

const score=200;
if(score>100){
    const pow="fly"
    console.log(`User power ${pow}`);
    
}
// console.log(`User power ${pow}`);              // pow is not defined


const bal=1000;
// if(bal>500) console.log("test");


if (bal<500) {
    console.log("less than");
    
}
else if(bal<750){
       console.log("less than 750");
       
}
else if(bal<950){
       console.log("less than 950");
       
}

else{
    // console.log("less than 1200");
    
}



const userLoggedIn=true;
const debtCard=true;
const loggedInGoogle=false;
const loggedInGmail=true
 

if(userLoggedIn && debtCard){
    console.log("allowed to access");
    
}

if (loggedInGoogle || loggedInGmail) {
    console.log("login using this that");
    
}