const code=["js","JAVA","python","cpp"]

// code.forEach( function (iteam){
//     console.log(iteam);
    
// })

code.forEach( (value)=>{
    // console.log(value);
    
})

code.forEach( (iteam,index,arr)=>{
    //  console.log(iteam,index,arr);
    
})

// function printme(item){
//     console.log(item);
    
// }
// code.forEach(printme)




///IMPORTANT 
const mycode=[
    {
        langName:"javascript",
        langFile:"..js"
    },
    {
        langName:"java",
        langFile:"..JAVA"
    },
    {
        langName:"C++",
        langFile:"..CPP"
    },
]

mycode.forEach( (iteam)=>{
    console.log(iteam.langName);
    
})