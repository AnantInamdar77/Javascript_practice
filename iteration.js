//for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is best num");
        
    }
    
    // console.log(element);
    
}

/*for (let i = 0; i <=10; i++) {
    console.log(`outer loop ${i}`);
    
    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop ${j} and inner loop ${i}`);
        console.log(i+'*' + j +'='+ i*j);
        
        
    }
    
}*/


// let myArray=["flash","batman","superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
    // console.log(element);
    
    
// }


//break and continue

// for (let index = 1; index <=20; index++) {
//     if (index==7) {
//         console.log(`detected 7 Thala for a reason`);
//         break;
        
//     }
//     console.log(`value of i is ${index}`);


for (let index = 1; index <=20; index++) {
    if (index==7) {
        // console.log(`detected 7 Thala for a reason`);
        continue;
        
    }
    // console.log(`value of i is ${index}`);
    
        
}




// while and do-while loop

let index=0;
while (index<=10) {
    console.log(`value of index is:${index}`);
    index=index+2
    }

let myArray=["flash","batman","superman"]

let a=0
while (a < myArray.length) {
    console.log(`value is ${myArray[a]}`);
    a=a+1;
    
    
}


let score=11;

do {
    console.log(`score is:${score}`);
    score++;
    
    
} while (score<=10);