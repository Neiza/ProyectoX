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
  setTimeout(showNext1, t); // Change image every 2 seconds
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
   mySlides[index-1].style.display = "block";
 });

var listMovies=16;
var listSeries=8;
var nameFileMovies="assets/img/img-home/p";
var nameFileSeries="assets/img/img-home/serie";

//
function divImage(list,nameFile,slides,nameDiv,type,nameimg){
      var contForDiv=document.getElementById(slides);
      var a=0;
      for (var j=0;(j<list);j+=2){
          var divFortwo=document.createElement("div");
          divFortwo.setAttribute("id",nameDiv+"two"+(j+1));
          divFortwo.setAttribute("class",nameDiv+"two");

        for(var i=1;i<3;i++){
            var divForElement=document.createElement("div");
            divForElement.setAttribute("id","div"+type+(i+j));
            divForElement.setAttribute("class","div"+type);
            var imgForElement=document.createElement("img");
            imgForElement.setAttribute("src",nameFile+(i+j)+".jpg");
            imgForElement.setAttribute("class","img"+type);
            divForElement.appendChild(imgForElement);
            var nameElement=document.createElement("span");
            nameElement.classList.add("icon-play");

            divForElement.appendChild(nameElement);
            divFortwo.appendChild(divForElement);
        }

        contForDiv.appendChild(divFortwo);
      }


  }
divImage(listMovies,nameFileMovies,"slidesMovies","divMovie","Movie","p");
divImage(listSeries,nameFileSeries,"slidesSeries","divSerie","Serie","serie");
var indexListM = 1;
var indexListS=1;
var t=5000;
var btnAfterMovie=document.getElementById("btnAfterMovie");
var btnBeforeMovie=document.getElementById("btnBeforeMovie");
var mySlidesMovie = document.getElementsByClassName("divMovietwo");
/*
btnBeforeMovie.addEventListener("click", function (){
  alert("atra");
  for (i = 0; i < mySlides.length; i++) {
     mySlidesMovie[i].style.display = "block";

  }
    indexListM=indexListM-1;
    if(indexListM>0){
      console.log(indexListM);
      mySlidesMovie[indexListM-1].style.display = "none";
    }
    else{
      indexListM=mySlidesMovie.length;
       mySlidesMovie[indexListM-1].style.display = "none";
    }
});
btnAfterMovie.addEventListener("click",function (){
  alert("ajo");
  indexListM++;

  for (i = 0; i < mySlidesMovie.length; i++) {
     mySlidesMovie[i].style.display = "none";
  }
  if (indexListM > mySlidesMovie.length) {
    indexListM = 1;
  }
  mySlidesMovie[indexListM-1].style.display = "block";
}
);*/
