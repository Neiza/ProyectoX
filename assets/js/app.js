
var container = document.getElementsByClassName("container")[0];
var menu = document.getElementsByClassName("menu")[0];
var nav = document.getElementById("nav-bar");
var signInContainer = document.getElementsByClassName("sign-in-container")[0];
var x = document.getElementById("X");
var xFrame = document.getElementById("xFrame")
var signInButton = document.getElementsByClassName("sign-in")[0];
var wrongEmail = document.getElementById("wrongEmail");
var wrongPassword = document.getElementById("wrongPassword");
var email = document.getElementsByClassName("email")[0];
var password = document.getElementsByClassName("password")[0];
var botonSignIn = document.getElementsByClassName("btn-sign-in")[0];
var dragbutton = document.getElementsByClassName("drag-drop")[0];
var sourcesYoutube = ["https://www.youtube.com/embed/JebwYGn5Z3E?ecver=1",
                      "https://www.youtube.com/embed/TKUluYL7Mcc?ecver=1",
                      "https://www.youtube.com/embed/6l_HeQyKEOU?ecver=1",
                      "https://www.youtube.com/embed/WBb3fojgW0Q?ecver=1",
                      "https://www.youtube.com/embed/5DIADh4lMq8?ecver=1",
                      "https://www.youtube.com/embed/LNGW6mmemz8?ecver=1",
                      "https://www.youtube.com/embed/wZdpNglLbt8?ecver=1",
                      "https://www.youtube.com/embed/uisBaTkQAEs?ecver=1",
                      "https://www.youtube.com/embed/0SDU6LlgdAw?ecver=1",
                      "https://www.youtube.com/embed/5PSNL1qE6VY?ecver=1",
                      "https://www.youtube.com/embed/RK8xHq6dfAo?ecver=1"];
  var link1 = "https://www.youtube.com/embed/JebwYGn5Z3E?ecver=1";
  var link2 = "https://www.youtube.com/embed/TKUluYL7Mcc?ecver=1";
  var link3 = "https://www.youtube.com/embed/6l_HeQyKEOU?ecver=1";
  var link4 = "https://www.youtube.com/embed/WBb3fojgW0Q?ecver=1";
  var link5 = "https://www.youtube.com/embed/5DIADh4lMq8?ecver=1";
  var link6 = "https://www.youtube.com/embed/LNGW6mmemz8?ecver=1";
  var link7 = "https://www.youtube.com/embed/wZdpNglLbt8?ecver=1";
  var link8 = "https://www.youtube.com/embed/uisBaTkQAEs?ecver=1";
  var link9 = "https://www.youtube.com/embed/0SDU6LlgdAw?ecver=1";
  var link10 = "https://www.youtube.com/embed/5PSNL1qE6VY?ecver=1";
  var link11 = "https://www.youtube.com/embed/RK8xHq6dfAo?ecver=1";

  var m = [link1, link2, link3, link4, link5, link6, link7, link8, link9,link10, link11]


var images = document.getElementsByClassName("principal-img");
var frameContainer = document.getElementById("frameContainer");
var iframe = document.getElementById("frame");

var expressionEmail                = /\w+@+\w+\.+[a-z]/;
var expressionPassword6Characters  =/^[A-Za-z0-9_]{6,20}$/;
var nPortadas = 11;

function createImages(){
  for (var i = 1; i <= nPortadas; i++) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("id","fig"+i);
    img.setAttribute("src","assets/img/img-portada/"+i+".png");
    img.setAttribute("draggable", "true");
    img.classList.add("principal-img");
    div.appendChild(img);
    container.appendChild(div);
    }
}

function EmailValidation(){
		if ((!expressionEmail.test(email.value))){
				wrongEmail.innerHTML = "Verifique su email "
        wrongEmail.style.display = "block";
		}
		else {
        wrongEmail.style.display = "none";
    }
	}

function PasswordValidation(){
		if (!expressionPassword6Characters.test(password.value)){
				wrongPassword.innerHTML = "La contraseña debe tener al menos 6 caracteres ";
        wrongPassword.style.display = "block";
		}
		else {
      wrongPassword.style.display = "none";
		}
}

function menuToggle(){
  nav.classList.toggle("show");
}

function sigInForm(){
  signInContainer.style.display = "block";
}

function trailer(){
  var link1 = "https://www.youtube.com/embed/JebwYGn5Z3E?ecver=1";
  var link2 = "https://www.youtube.com/embed/TKUluYL7Mcc?ecver=1";
  var link3 = "https://www.youtube.com/embed/6l_HeQyKEOU?ecver=1";
  var link4 = "https://www.youtube.com/embed/WBb3fojgW0Q?ecver=1";
  var link5 = "https://www.youtube.com/embed/5DIADh4lMq8?ecver=1";
  var link6 = "https://www.youtube.com/embed/LNGW6mmemz8?ecver=1";
  var link7 = "https://www.youtube.com/embed/wZdpNglLbt8?ecver=1";
  var link8 = "https://www.youtube.com/embed/uisBaTkQAEs?ecver=1";
  var link9 = "https://www.youtube.com/embed/0SDU6LlgdAw?ecver=1";
  var link10 = "https://www.youtube.com/embed/5PSNL1qE6VY?ecver=1";
  var link11 = "https://www.youtube.com/embed/RK8xHq6dfAo?ecver=1";

  var m = [link1, link2, link3, link4, link5, link6, link7, link8, link9,link10, link11]

  for (var i=0; i<sourcesYoutube.length; i++){
      images[i].addEventListener("click", function(){
      iframe.setAttribute("src", link1);
      frameContainer.style.display = "block";
    })
  }
}

function start(e){
  for(var i=0; i<images.legth; i++){
      e.dataTransfer.setDAta("text", images[i]);
  }
}



for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("dragstar", start);
}


/*function drop(e){
  var link1 = "https://www.youtube.com/embed/JebwYGn5Z3E?ecver=1";
  var link2 = "https://www.youtube.com/embed/TKUluYL7Mcc?ecver=1";
  var link3 = "https://www.youtube.com/embed/6l_HeQyKEOU?ecver=1";
  var link4 = "https://www.youtube.com/embed/WBb3fojgW0Q?ecver=1";
  var link5 = "https://www.youtube.com/embed/5DIADh4lMq8?ecver=1";
  var link6 = "https://www.youtube.com/embed/LNGW6mmemz8?ecver=1";
  var link7 = "https://www.youtube.com/embed/wZdpNglLbt8?ecver=1";
  var link8 = "https://www.youtube.com/embed/uisBaTkQAEs?ecver=1";
  var link9 = "https://www.youtube.com/embed/0SDU6LlgdAw?ecver=1";
  var link10 = "https://www.youtube.com/embed/5PSNL1qE6VY?ecver=1";
  var link11 = "https://www.youtube.com/embed/RK8xHq6dfAo?ecver=1";

  var m = [link1, link2, link3, link4, link5, link6, link7, link8, link9,link10, link11]

  for (var i=0; i<sourcesYoutube.length; i++){
     var imgDrag = document.createElement("img");
      dragbutton.appendChild(imgDrag);
      img.src =
      images[i].addEventListener("drop", function(){
      iframe.setAttribute("src", link1);
      frameContainer.style.display = "block";
    })
  }
}*/


window.addEventListener("load", function(){

  createImages();
  trailer();
  menu.addEventListener("click", function(event){
    event.preventDefault();
    menuToggle();

  });

  signInButton.addEventListener("click", function(event){
    event.preventDefault();
    sigInForm();
  });

  x.addEventListener("click", function(event){
    event.preventDefault();
    signInContainer.style.display = "none";
  });

  xFrame.addEventListener("click", function(event){
    event.preventDefault();
    frameContainer.style.display = "none";
  });

  email.addEventListener("blur", function(){
        EmailValidation();
  });

  password.addEventListener("blur", function(){
    PasswordValidation();
  });

  botonSignIn.addEventListener("click", function(event){
    event.preventDefault();
    window.location = "home.html";
  })
});
