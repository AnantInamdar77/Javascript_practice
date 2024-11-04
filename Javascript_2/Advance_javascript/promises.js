//how promises are made

const promiseOne=new Promise(function(resolve,reject){
    //Do an Async task
    //DB Calls,  crytography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();

        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    

})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"avi@example.com"})
        
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    

})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Anant",password:"123"})
        }
        else{
            reject('Error: something went wrong')
        }

    },1000)

})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    

}).finally(()=>{console.log("The promise is either resolved or rejected");
})



const promiseFive=new Promise(function(resolve,reject){
    let error=true
    if(!error){
        resolve({username:"javascript",password:"123"})
    }
    else{
        reject('Error: js went wrong')
    }

},1000)

async function consumePromiseFive() {
    // const reponse=await promiseFive
    // console.log(reponse);
    try {
        const reponse=await promiseFive
        console.log(reponse);
    } catch (error) {
        console.log(error);
        
    }
    
    
}
consumePromiseFive()

// async function getAllUsers() {
// //    const reponse= await fetch('https://jsonplacehoder.typicode.com/users')
// //    const data=reponse.json()
// //    console.log(data);
// try {
//     const reponse= await fetch('https://jsonplacehoder.typicode.com/users')
//     const data=await reponse.json()
//     console.log(data);

// } catch (error) {
//     console.log(error);
    
// }
   
    
// }
// getAllUsers()


fetch('https://jsonplacehoder.typicode.com/users')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally()
