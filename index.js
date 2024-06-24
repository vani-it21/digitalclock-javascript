const houre1=document.getElementById("hour");
const minutese1=document.getElementById("minutes");

const secondse1=document.getElementById("seconds");
const ampme1=document.getElementById("ampm");
function upclock(){
    let hour =new Date().getHours();
    let minute =new Date().getMinutes();
    let second =new Date().getSeconds();
    let ampm="AM";
  if(hour>12){
    h=h-12;
    ampm="PM";
  }
  hour=hour<10 ?"0"+hour:hour;
  minute=minute<10 ?"0"+minute:minute;
  second=second<10 ?"0"+second:second;
houre1.innerHTML=hour;
minutese1.innerHTML=minute;
secondse1.innerHTML=second;
ampme1,(innerHTML=ampm);
setTimeout(()=>{ 
upclock()},1000);
}
upclock();