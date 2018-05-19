/* This file should be in a folder called `js` */

var clock = document.getElementById('clock');


function hexClock() {
  var time = new Date();
  var hours = (time.getHours()).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();
  var a='';
  console.log(time.getMonth());
  if(hours % 12==0)
     a = a +'AM';
  else
    a= a + 'PM';
  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var clockStr = hours%12 + ' : ' + minutes + ' : ' + seconds +' '+ a;
 

  clock.textContent = clockStr;


}

hexClock();
setInterval(hexClock, 1000);