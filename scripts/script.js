<<<<<<< HEAD
// setting var's equal to our elements we are making active
=======
>>>>>>> Bellul
const bg = document.getElementById('header');
const counts = document.getElementById('counts');
const line = document.getElementById('line'); 

<<<<<<< HEAD
// once clicked we will change our headers background by dividing our height in three and counting out the inner text
// finally set the actual timer min and max
=======
>>>>>>> Bellul
const imgchange = () => {
  setTimeout(() => {
    bg.style.background = "url('./images/homeimg/freeBR2.jpg')no-repeat center center/cover";
    line.style.height ="33px"; 
    counts.innerText = "01";
  }, 0000);
   setTimeout(() => {
    bg.style.background = "url('../images/homeimg/freeBR.jpg')no-repeat center center/cover";
      line.style.height ="66px"; 
      counts.innerText = "02";
  }, 5000);
   setTimeout(() => {
    bg.style.background = "url('./images/homeimg/freeBR3.jpg')no-repeat center center/cover";
      line.style.height ="99px"; 
     counts.innerText = "03";
  }, 10000);
}
setInterval(imgchange, 15000);
 imgchange();