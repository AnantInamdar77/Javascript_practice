const name="Anant"
const repocount=50
// console.log(name+ repocount+"no of repo");

console.log(`hello my name is ${name} and my repo countis${repocount}`);
// Use of Back-ticks is used in the above print statement

const gamename=new String('anant-ai')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('t'));
// go through differnt string methods

const newString=gamename.substring(0,4);
console.log(newString);

const anotherString=gamename.slice(-6,4)
console.log(anotherString);

const string1="   anant     "
console.log(string1);
console.log(string1.trim());

const url="https://anant.com/77"

console.log(url.replace('77','11'));

console.log(url.includes('anant'));
console.log(url.includes('shashank'));


console.log(gamename.split('-'));






