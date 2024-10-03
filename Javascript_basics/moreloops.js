// for of loop

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greet="hello world!";
for (const element of greet) {
    // console.log(` each char is ${element} `);
    
    
}

//Maps in js

const map=new Map()
map.set('IN' ,"India")
map.set('USA', "United States")
map.set('UK',"United Kingdom")

//maps are unique elements

// console.log(map);


for (const [key ,value] of map) {
    // console.log(key, ':-',value);
    
    
}

const myobj={
    'game1':'NFS',
    'game2':'PUBG'
}

// for (const [key,value] of myobj) {
//     console.log(key,':-',value);
    
    
// }  ///this forof loop will not work for object





const object={
    js:'javascript',
    cpp:'c++',
    java:'JAVA',
    style:'CSS'
}

for (const key in object) {
    console.log(`${key} shotcut is for ${object[key]}`);
    
 
}

const programs=["js","c++","JAVA","Go","typescript"]

for (const key in programs) {
    console.log(programs[key]);
    
}


