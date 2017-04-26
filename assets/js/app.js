
var container = document.getElementsByClassName("container")[0];
var menu = document.getElementsByClassName("menu")[0];
var nav = document.getElementById("nav-bar");
var signInContainer = document.getElementsByClassName("sign-in-container")[0];
var x = document.getElementById("X");
var signInButton = document.getElementsByClassName("sign-in")[0];
var wrongEmail = document.getElementById("wrongEmail");
var wrongPassword = document.getElementById("wrongPassword");
var email = document.getElementsByClassName("email")[0];
var password = document.getElementsByClassName("password")[0];
var botonSignIn = document.getElementsByClassName("btn-sign-in")[0];
/*var sourcesYoutube = [{"1","https://www.youtube.com/watch?v=JebwYGn5Z3E"}
                      {"2", "https://www.youtube.com/watch?v=UMRBs0-OXCA"}]*/
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
  for(var i=0; i<sources.length; i++){
    iframe.src = sources[i]

  }
}

window.addEventListener("load", function(){
  createImages();
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
