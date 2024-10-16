let data = [
 {
  id:1,
  img:'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 heading:'buttermilk pancakes',
 price:'$2.99',
 text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non',
},
{
 id:2,
 img:'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
heading:'buttermilk',
price:'$6.99',
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non',
},

{
 id:3,
 img:'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
heading:'buttermilk pancakes',
price:'$5.99',
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non',
},

{
 id:4,
 img:'https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
heading:'buttermilk pancakes',
price:'$3.99',
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non',
},

{
 id:5,
 img:'https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
heading:'buttermilk pancakes',
price:'$4.99',
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis aliquam officiis fugiat? Aperiam ratione ut alias, ex repellendus eveniet non facilis dicta modi totam autem nisi aliquid. Enim, non',
},

];
let main=document.querySelector('.main');
let cake=data.map((item)=>{
 const {id,img,heading,price,text}=item;
return `<div class="menu-item">
<div class="menu-info">
 <img src="${img}" class="image" alt="">
<div class="text">
 <article class="text-align">
  <h3> ${heading}</h3>
  <span>${price}</span>
 </article>
 <p>${text}</p>
</div>
</div>
  </div>
  `
}).join('');

 main.innerHTML=cake;










