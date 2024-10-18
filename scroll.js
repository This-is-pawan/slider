let nav= document.querySelector('.nav');
let arrow= document.querySelector('.fa-arrow-up');
let span= document.querySelector('.footerAlign span');
console.log(span);

let Time = new Date()
let getTime = Time.getFullYear();
span.innerHTML=getTime
window.addEventListener('scroll', () => {

 if (window.scrollY > 250) {
  arrow.classList.add('arrowShow'); 
 }
 else{
  arrow.classList.remove('arrowShow'); 
 }
 if (window.scrollY > 30) {
   nav.classList.add('scrollShow'); 
   
 } else {
   nav.classList.remove('scrollShow');
  
 }
});

arrow.addEventListener('click',()=>{
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
})

})




