var index = 1;
var t=5000;
var btnA=document.getElementById("btnAfter");
var btnB=document.getElementById("btnBefore");
var mySlides = document.getElementsByClassName("mySlides");
showNext1();
//Time to Slide1
function showNext1() {
    var i;
    for (i = 0; i < mySlides.length; i++) {
       mySlides[i].style.display = "none";
    }
    index++;

    if (index > mySlides.length) {
      index = 1;
    }
    if(index>0){
      console.log(index);
      mySlides[index-1].style.display = "block";
    }
    else{
      index=6;
      mySlides[index-1].style.display = "block";
    }
//  setTimeout(showNext1, t); // Change image every 2 seconds
}

 btnB.addEventListener("click", function(){
   for (i = 0; i < mySlides.length; i++) {
      mySlides[i].style.display = "none";
   }
     index=index-1;
     if(index>0){
       console.log(index);
       mySlides[index-1].style.display = "block";
     }
     else{
       index=6;
        mySlides[index-1].style.display = "block";
     }
 });
 btnA.addEventListener("click", function (){
   index++;

   for (i = 0; i < mySlides.length; i++) {
      mySlides[i].style.display = "none";
   }
   if (index > mySlides.length) {
     index = 1;
   }
   console.log(index);
   mySlides[index-1].style.display = "block";
 });


//
function divImage(listMovies,nameFile){
      var contForDiv=document.getElementById("cont-list-movies");
      for(var i=0;i<listMovies.length;i++){
          var divForMovie=document.createElement("div");

          contForDiv.appendChild(divForMovie);
          divForMovie.setAttribute("id",name);
          divForMovie.setAttribute("class","divCoder"+nameFile);
          var imgForMovie=document.createElement("img");
          imgForMovie.setAttribute("src","assets/image/"+nameFile+"/"+listMovies[i]);
          imgForMovie.setAttribute("class",nameFile);
          divForMovie.appendChild(imgForMovie);
          var space=document.createElement("br");
          divForMovie.appendChild(space);
          var nameCoder=document.createElement("span");
          nameCoder.classList.add("nameCoder");
          nameCoder.innerHTML=name;
          divForMovie.appendChild(nameCoder);
      }
  }
