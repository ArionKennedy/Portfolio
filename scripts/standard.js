function nav_open() {
  document.getElementById("mySidebar").classList.add("open");
  document.getElementById("myOverlay").classList.add("open");
  document.getElementById("sideBarLineOne").classList.add("wide");
  document.getElementById("sideBarLineTwo").classList.add("wide");
  document.getElementById("sideBarLineThree").classList.add("wide");
}

function nav_close() {
  document.getElementById("mySidebar").classList.remove("open");
  document.getElementById("myOverlay").classList.remove("open");
  document.getElementById("sideBarLineOne").classList.remove("wide");
  document.getElementById("sideBarLineTwo").classList.remove("wide");
  document.getElementById("sideBarLineThree").classList.remove("wide");
}

function switchTo(pageName){
  let urlNew = pageName + '.html';
  window.location.replace(urlNew);
}