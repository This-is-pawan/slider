let d1=document.querySelector('.parent');
let d2=document.querySelector('.linkList');
 // console.log(d2);s

 function propagation(e){
  console.log('there  is a click event');
  // console.log(e.target);
  console.log(e.currentTarget.stopPropagation);
  // console.log(e.currentTarget);
  // e.stopPropagation(); 
 }

d1.addEventListener('click',propagation);
document.addEventListener('click',propagation);
window.addEventListener('click',propagation);

