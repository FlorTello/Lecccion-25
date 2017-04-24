function creandoDiv(getURL){
  var contenedor = document.getElementById('contenedor');
  var div = document.createElement('div');
  var img = document.createElement('img');
  img.setAttribute('src', getURL);
  div.classList.add('contenedor-imagen');
  console.log(img.sizes);
  //if(img.sizes !== ""){
    div.appendChild(img);
    contenedor.appendChild(div);
  //}
}
var inputURL = document.getElementById('url');
function getURL(e){
  if(e.keyCode == 13 && this.value !== ""){
    creandoDiv(this.value);
    this.value = "";
  }
  else {
    this.setAttribute('placeholder','Ingrese link');
    this.focus();
  }
}
inputURL.onkeydown = getURL;
