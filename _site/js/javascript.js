window.onload=unblur;
var blurIndex=10;
function unblur() {
  if (blurIndex>=0) {
    setTimeout(unblur,50);
    document.body.style.filter="blur("+blurIndex+"px)";
    blurIndex--;
  }
}
addCard(document.getElementById("carousel-first"));
addCard(document.getElementById("carousel-second"));
addCard(document.getElementById("carousel-third"));
addCard(document.getElementById("carousel-fourth"));
function addCard(target,image,title,body) {
  if (image) {
    /*create card*/
  }
  else {
    var text='<div class="card"><img class="card-img-top" src="https://picsum.photos/400/400" alt="Card image placeholder">  <div class="card-body text-center"><h3 class="card-title">Lorem Project</h3> <p class="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, in reprehender</p><a href="#" class="button button-dark">Read more</a></div></div>';
    target.innerHTML=text;
  }
}
