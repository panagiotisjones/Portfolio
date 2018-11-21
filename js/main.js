window.onload=effect;
var blurIndex=10;

function effect() {
  document.getElementById("loading-placeholder").style.zIndex="-1";
  /* Blur once or else it gets annoying */
  if (!document.cookie) {
    setCookie("blur","done",0.1);
    unblur();
  }
}
function unblur() {
  if (blurIndex>=0) {
    setTimeout(unblur,50);
    document.body.style.filter="blur("+blurIndex+"px)";
    blurIndex--;
  }
}

function setCookie(key,value,expiryInDays) {
  var string=key+"="+value;
  if (expiryInDays) {
    currentDate=new Date();
    expiryDate=new Date(currentDate.getTime()+expiryInDays*24*60*60*1000);
    string+="; expires="+expiryDate.toUTCString();
  }
  document.cookie=string;
}
