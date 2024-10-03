const myArr=[0,1,2,5,6,7,"Anant"]

const hero=["spiderman","superman","batman"]

const myArr2=new Array(1,2,3,4);

// console.log(myArr[4]);


// Array methods

myArr.push(6)
myArr.push(11)
myArr.pop()       
// | Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// myArr.unshift(9) 
//adds the element given to the first of the array

// myArr.shift()
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(7));

const newArr=myArr.join()
// console.log(myArr);

// console.log(newArr);
// console.log( typeof newArr);




//slice,splice

// console.log("A",myArr);

const n1=myArr.slice(1,3)
// console.log(n1);
// console.log("B",myArr);

const n2=myArr.splice(1,3)
// console.log(n1);

// console.log("C",myArr);
// console.log(n2);
//splice changes or manipulates original array(interview qns)

//#PART-2 ARRAYS

const marvel=["thor","Ironman","spidy"]
const dc=["superman","flash","batman"]

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]);

// const allhero=marvel.concat(dc)
// console.log(allhero);

const allhero=[...marvel,...dc]
console.log(allhero);

const a=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const b=a.flat(Infinity)
console.log(b);

console.log(Array.isArray("Anant"))
console.log(Array.from("Anant"))
console.log(Array.from({name:"Anant"}))    //intersting 
//interview

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));






























