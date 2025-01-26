//function

function sayHello(){
    console.log('hey Anant')
}
sayHello()
sayHello() //calling function


//parameters
function add(a,b)//a and b are arguments
{
    console.log(a+b);
    }
add(4,3)  // 4,3 are parameters
add(36,49)

//Assignment
function product(a,b){
    // console.log(a*b)
    return a*b;
}
let a=product(4,3)
console.log('hey rsult is',a);


//unlimited arguments
function addNumbers(){
    // console.log(arguments);
    let ans=0;
    for(let i=0;i< arguments.length;i++){
        ans=ans+arguments[i]

    }
    return ans
    }
let result=addNumbers(4,78,45,89,23,36)
console.log(result);

// other method
function addNumbers2(...numbers){ //spread operator
    let ans=0
    for(let i=0;i<numbers.length;i++){
        ans=ans+numbers[i]
    }
    return ans
}
sum=addNumbers2(6,3,56,34,765,76)
console.log(sum)

