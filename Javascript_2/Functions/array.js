//Array
const students=['anant','john','gagan','bill']
console.log(students.length);
console.log(students[2]);
students[0]='anant vi' //mutation
console.log(students[0]);

//here const you cannot change students variable its an array only but u can change values inside array

//Functions used i array
students.push('alexa')     //to add the value at end of array
console.log(students);

//arrays are homogeneous in other language but in js u can use all types in a single array |

const myArray=[1,true,false,"Anant","😎"]
myArray.push({attitude:'🥶'})
console.log(myArray);

console.log(myArray.indexOf('Anant'));   //3
console.log(myArray.indexOf('An'));   //-1

students.pop()        //removed last value

students.reverse()        //reverses the array




const num=[1,2,3,4,5,6,7]
let ans=num.find(n=>n===4)
console.log(ans);
const even=num.filter((n)=>n%2===0)
console.log(even);

let s=num.slice(1,5)
console.log(s);

let sp=num.splice(1,4)
console.log(sp);
console.log(num);






