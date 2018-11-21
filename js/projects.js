/* Not the most elegant piece of code I've written but it handles pagination */

var page1=document.getElementById("page-1");
var page2=document.getElementById("page-2");
var page3=document.getElementById("page-3");
var buttonPrev=document.getElementById("pagination-prev");
var button1=document.getElementById("pagination-1");
var button2=document.getElementById("pagination-2");
var button3=document.getElementById("pagination-3");
var buttonNext=document.getElementById("pagination-next");

function changePage(sourceButton) {
  var targetValue=sourceButton.getAttribute("data-target");
  switch (targetValue) {
    case "page-1":
      page1.style.display="block";
      page2.style.display="none";
      page3.style.display="none";
      buttonNext.style.display="inline";
      buttonPrev.style.display="none";
      button3.classList.remove("button-dark-active");
      button2.classList.remove("button-dark-active");
      button1.classList.add("button-dark-active");
      break;
    case "page-2":
      page1.style.display="none";
      page2.style.display="block";
      page3.style.display="none";
      buttonNext.style.display="inline";
      buttonPrev.style.display="inline";
      button3.classList.remove("button-dark-active");
      button1.classList.remove("button-dark-active");
      button2.classList.add("button-dark-active");
      break;
    case "page-3":
      page1.style.display="none";
      page2.style.display="none";
      page3.style.display="block";
      buttonNext.style.display="none";
      buttonPrev.style.display="inline";
      button1.classList.remove("button-dark-active");
      button2.classList.remove("button-dark-active");
      button3.classList.add("button-dark-active");
    }
  }

function nextPage() {
  if (button1.classList.contains("button-dark-active")) {
    button1.classList.remove("button-dark-active");
    page1.style.display="none";
    page2.style.display="block";
    button2.classList.add("button-dark-active");
    buttonPrev.style.display="inline";
  }
  else if (button2.classList.contains("button-dark-active")) {
    button2.classList.remove("button-dark-active");
    page2.style.display="none";
    page3.style.display="block";
    button3.classList.add("button-dark-active");
    buttonNext.style.display="none";
  }
}

function prevPage() {
  if (button2.classList.contains("button-dark-active")) {
    button2.classList.remove("button-dark-active");
    page2.style.display="none";
    page1.style.display="block";
    button1.classList.add("button-dark-active");
    buttonPrev.style.display="none";
  }
  else if (button3.classList.contains("button-dark-active")) {
    button3.classList.remove("button-dark-active");
    page3.style.display="none";
    page2.style.display="block";
    button2.classList.add("button-dark-active");
    buttonNext.style.display="inline";
  }
}
