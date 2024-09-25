// Dates
// ctrl+space for recommendation

let myDate=new Date()
console.log(typeof myDate);        //object

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleTimeString());

console.log(myDate.toUTCString());

let ownDate=new Date(2024,5,29,23,13,57)
// console.log(ownDate.toDateString());
console.log(ownDate.toLocaleString());

let ownDate1=new Date("2005-04-11")
console.log(ownDate1.toLocaleString());

let ownDate2=new Date("04-11-2005")
console.log(ownDate2.toLocaleString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(ownDate2.getTime());

console.log(Math.floor(Date.now()/1000));   //to calculate time and convert from milli sec to seconds



let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday:"long",
    
}))













