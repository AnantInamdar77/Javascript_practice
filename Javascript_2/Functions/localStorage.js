const button=document.getElementById('clickButton')
const uname=document.getElementById('username')
button.addEventListener('click',()=>{
    const value=uname.value
    localStorage.setItem("name",value)
})


//getting users location

function gotloc(position
    
){
    console.log(position)

}
function failed(){

}
const loc=document.getElementById('location')
loc.addEventListener('click',async()=>{
    navigator.geolocation.getCurrentPosition(gotloc,failed)
})