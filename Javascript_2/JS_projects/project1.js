const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach( function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
  //  if (e.target.id==='grey') {
  //   body.style.backgroundColor=e.target.id
    
  //  }
  //  if (e.target.id==='white') {
  //   body.style.backgroundColor=e.target.id
    
  //  }
  //  if (e.target.id==='blue') {
  //   body.style.backgroundColor=e.target.id
    
  //  }
  //  if (e.target.id==='yellow') {
  //   body.style.backgroundColor=e.target.id
    
  //  }
  switch (e.target.id) {
    case 'grey':
    case 'white':
    case 'blue':
    case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    default:
        // Optional: handle cases where the id is not recognized

        // console.log('Unrecognized color:', e.target.id);
}
    
    

  })
  
})
