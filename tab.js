// let btns=document.querySelectorAll('.active');
// let text=document.querySelector('.text');
// let Active = document.querySelectorAll('.Active');


// text.addEventListener('click',(ev)=>{
//  const id =ev.target.dataset.id
// if (id) {
//  // console.log(id);
//  btns.forEach((btn)=>{
// btn.classList.remove('active');
// ev.target.classList.add('active');
//  })
//  Active.forEach((actives)=>{
// actives.classList.remove('Active');
//  })
//  const element=document.getElementById(id);
//  element.classList.add('Active')
// }
// })



const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-panel');
const tabsContainer = document.querySelector('.tabs');


tabsContainer.addEventListener('click', (event) => {
  const id = event.target.dataset.id;

  if (id) {
    
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
    
    event.target.classList.add('active');

    
    tabContents.forEach((content) => {
      content.classList.remove('active');
    });
    
    const activeContent = document.getElementById(id);
    activeContent.classList.add('active');
  }
});











