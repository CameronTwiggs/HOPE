const bg = document.getElementById('header');
const counts = document.getElementById('counts');
const line = document.getElementById('line'); 

const imgchange = () => {
  setTimeout(() => {
    bg.style.background = "url('freeBR2.jpg')no-repeat center center/cover";
    line.style.height ="33px"; 
    counts.innerText = "01";
  }, 0000);
   setTimeout(() => {
    bg.style.background = "url('freeBR.jpg')no-repeat center center/cover";
      line.style.height ="66px"; 
      counts.innerText = "02";
  }, 5000);
   setTimeout(() => {
    bg.style.background = "url('freeBR3.jpg')no-repeat center center/cover";
      line.style.height ="99px"; 
     counts.innerText = "03";
  }, 10000);
}
setInterval(imgchange, 15000);
 imgchange();