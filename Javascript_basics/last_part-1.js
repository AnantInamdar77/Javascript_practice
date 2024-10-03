// const code=["js","java","python","cpp"]

// const values=code.forEach( (iteam)=>{
//     console.log(iteam);
//     return iteam;
    
// })

// console.log(values);





//filters

const mynums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=mynums.filter( (num)=> num>4 )

// const newNums=mynums.filter( (num)=> {
//     num>4
// })       // it reurns [] due to scope decleration and we should use return keyword in this function as shown below
// const newNums=mynums.filter( (num)=> {
//     return num>4
// })


// const newNums=[]

// mynums.forEach( (num)=>{
//     if (num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);



// Real world use case of filter
const Books=[
    {title:'b1',genre:'fiction',publish:1947,edition:2005},
    {title:'b2',genre:'History',publish:2001,edition:2007},
    {title:'b3',genre:'horror',publish:2009,edition:2010},
    {title:'b4',genre:'History',publish:1956,edition:2021},
    {title:'b5',genre:'fiction',publish:1947,edition:2007},
    {title:'b6',genre:'History',publish:2001,edition:2023},
    {title:'b7',genre:'relegion',publish:1998,edition:2024},
    {title:'b8',genre:'poetry',publish:1898,edition:2000},
]

let userbook=Books.filter( (bk)=> bk.genre==='History')

 userbook=Books.filter( (bk)=> {
    return bk.publish>=2000 && bk.genre==='History'
 })

console.log(userbook);











//Maps
const Mynums=[1,2,3,4,5,6,7,8,9,10]
// const NewNums=Mynums.map( (num)=> num+10)

//chaining
const newNums=Mynums.map((num)=>num*10).map( (num)=> num+1).filter((num)=> num>=40)

console.log(newNums);


// reduce() Method

const numbers=[1,2,3]

// const total=numbers.reduce(function(accumulator,currentvalue) {
//     console.log(`acc: ${accumulator}and curval:${currentvalue}`);
    
//     return accumulator+currentvalue
// },0)

//using arrow function
const total=numbers.reduce( (acc,cur)=>acc+cur,0)


console.log(total);

const cart=[
    {
        iteamName:"js course",
        price:2999
    },
    {
        iteamName:"python",
        price:9999
    },
    {
        iteamName:"app",
        price:29999
    },
    {
        iteamName:"datascience",
        price:3999
    },
    {
        iteamName:"DSA",
        price:0
    }
    
]


const totalPrice=cart.reduce( (acc,iteam)=>acc+iteam.price,0)
console.log(totalPrice);
