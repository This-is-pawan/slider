let btns= document.querySelectorAll('.btn');
let span = document.querySelector('span');
// console.log(btns);
let count=0;
btns.forEach((ev)=>{
ev.addEventListener('click',(e)=>{
e.target;
// console.log(e.target);
e.target;
if (e.target.classList.contains('increase')) {
 
 span.innerText=`${count++}`
 span.style.color=`blue`
}
else if (e.target.classList.contains('decease')) {
 
 span.innerText=`${count--}`
 span.style.color=`yellow`
}
else{
 span.innerText=`${count=0}`
 span.style.color=`red`
}
})
})

