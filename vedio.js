let topBtn = document.querySelector('.top-btn');
  let pause = document.querySelector('.pause');
  let play = document.querySelector('.play');
  let video=document.querySelector('#video');

  pause.addEventListener('click',()=>{
// console.log(topBtn);
if (video.play) {
 video.pause();
 topBtn.classList.toggle('topShow')
}
  })

  play.addEventListener('click',()=>{
   if (video.pause) {
    video.play();
    
    topBtn.classList.toggle('topShow')
   }
  })
  