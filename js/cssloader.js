var element=document.getElementById("cssInclude");
element.innerHTML='<link rel="stylesheet" href="css/allsizes.css">';
if (window.innerWidth>=1200) {
  element.innerHTML=element.innerHTML+'<link rel="stylesheet" href="css/lgorgreater.css">';
}
else {
  element.innerHTML=element.innerHTML+'<link rel="stylesheet" href="css/lessthanlg.css">';
}
