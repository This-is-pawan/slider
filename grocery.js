let edit=document.querySelector('.fa-edit');
let btn=document.querySelector('.btn');
let itemSpans=document.querySelectorAll('.items span');
let itemSpan=document.querySelectorAll('.items span');
let items=document.querySelectorAll('.items ');

edit.addEventListener('click',()=>{
 btn.innerText=` Edit `
 btn.addEventListener('click',()=>{
   btn.innerText=` Submit `
 });
});