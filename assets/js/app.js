
var container = document.getElementsByClassName("container")[0];
vaar arra = ["j","k","l"]
function createImages(){
  for (var i = 1; i <=arra.length; i++) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", "assets/img/principal-img/"+i+".jpg");
    img.classList.add("principal-img");
    div.appendChild(img);
    container.appendChild(div);

    }
}

window.addEventListener("load", createImages());
