

function Getting(selection) {
 let element= document.querySelector(selection);
 if (element) {
  return element
 }
 throw new Error(`please check your  system this  is getting ${selection}`);
 
}

  Getting('.nature')
  Getting('.city')


class Gallery {
 constructor(element) {
  console.log(this.element);
  
 }



}

let Nature = new Gallery(Getting('.nature'));
let City= new Gallery(Getting('.city'));