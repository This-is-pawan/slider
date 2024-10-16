let textShow= document.querySelectorAll('.text p');
let fas=document.querySelectorAll('.fas');
let faPlus=document.querySelectorAll(' .fa-plus');
let faMinus=document.querySelectorAll('.fa-minus');
window.addEventListener('DOMContentLoaded',()=>{

 fas.forEach((ev)=>{
  if (ev.classList.contains('first')) {
  
   ev.addEventListener('click',(e)=>{
    // console.log( e.target);
    
    
    if (e.target.classList.contains('fa-plus')) {
     // console.log(e.target);
     textShow.forEach((ev)=>{
      if (ev.classList.contains('first')) {
       ev.classList.toggle('text_show')
       
     }else{
      ev.classList.remove('text_show');
     }
    });
    
   };
  });
 }
 if (ev.classList.contains('second')) {
  
  ev.addEventListener('click',(e)=>{
   // console.log( e.target);
   
   e.target
   if (e.target.classList.contains('fa-plus')) {
    // console.log(e.target);
    textShow.forEach((ev)=>{
     if (ev.classList.contains('second')) {
      ev.classList.toggle('text_show')
     }else{
      ev.classList.remove('text_show')
     }
    });
    
   };
  });
 }
 if (ev.classList.contains('third')) {
  
  ev.addEventListener('click',(e)=>{
   // console.log( e.target);
   e.target
   if (e.target.classList.contains('fa-plus')) {
    // console.log(e.target);
    textShow.forEach((ev)=>{
     if (ev.classList.contains('third')) {
      ev.classList.toggle('text_show')
     }else{
      ev.classList.remove('text_show')
     }
    });
    
   };
  });
 }
});
// console.log(fas);
})








