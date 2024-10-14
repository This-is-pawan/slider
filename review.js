let data = [
 {
   id: 1,
   Img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   Name: "sara jones",
   Designer: "UX DESIGNER",
   Text: "Hey I'm Sara Jones. I'm a UX designer in the USA. Recently working on front-end website designing, and next month I'll be working on back-end development.",
 },
 {
   id: 2,
   Img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   Name: "daniel",
   Designer: "UV DESIGNER",
   Text: "Hey I'm Daniel. I'm a UV designer in the UK. Recently working on front-end website designing, and next month I'll be working on back-end development.",
 },
 {
   id: 3,
   Img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   Name: "john",
   Designer: "WEB DESIGNER",
   Text: "Hey I'm John. I'm a web designer in Canada. Recently working on front-end website designing, and next month I'll be working on back-end development.",
 },
 {
   id: 4,
   Img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   Name: "joni",
   Designer: "APP DESIGNER",
   Text: "Hey I'm Joni. I'm an app designer in the USA. Recently working on front-end website designing, and next month I'll be working on back-end development.",
 },
];
let rd=0;
let btn=document.querySelectorAll('.btn');
let Img=document.querySelector('.IMG');
let Name=document.querySelector('h4');
let Designer=document.querySelector('span');
let Text=document.querySelector('.review_align p');
// console.log(Text);

let sing=document.querySelector('.sing');
sing.addEventListener('click',()=>{
  let rd=Math.floor(Math.random()*data.length);
  let review=data[rd];
  // console.log(review.Img);
   Img.src=review.Img;
   Name.innerText=review.Name;
   Designer.innerText=review.Designer;
   Text.innerText=review.Text;
})
let count =1;
btn.forEach((ev)=>{
ev.addEventListener('click',(e)=>{
  if (e.target.classList.contains('fa-less-than')) {
count++;
let rv=data[count];
  console.log(rv.id);
    if (count===id) {
       console.log('fa-less-than');
    }

  } else if(e.target.classList.contains('fa-greater-than')){
    console.log('greater');
  }

  });
});

