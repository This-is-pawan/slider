let data=[
  {Name:"john1",age:34,sal:899999,id:1},
  {Name:"john2",age:30,sal:799999,id:2},
  {Name:"john3",age:33,sal:999999,id:3},
  {Name:"john4",age:32,sal:109999,id:4},
];

let fil=data.filter((item)=>{
return item;

});

for (const ke of fil) {
 
 console.log(`Name:${ke.Name}Age: ${ke.age} sal: ${ke.sal}`);
}

let find=data.find((item)=>{
 // return item;
 if (item.id===2) {
  // console.log(item.Name);
  return item;
 }
 
 });

 console.log(find);
data.reduce((acc,curr)=>{
console.log( `${curr.Name} ${curr.age} ${curr.sal}`);
 },0);

// in simple way
let arr =[84,3,45,89,90];
arr.reduce((acc,curr,index)=>{
console.log(acc+curr,index);

},10) 

 
 

 









