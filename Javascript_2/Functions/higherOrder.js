
// Higher order function and Callback
function add(a,b,cb){
    let result=a+b;
    cb(result)
}
add(2,4,function(val){
    console.log(val);
    
})

add(3,5,(val)=>console.log(val
    
))