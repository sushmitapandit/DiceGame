var randomNumber1;
var randomNumber2;

randomNumber1=Math.floor(Math.random() * 6)+1;
randomNumber2=Math.floor(Math.random() * 6)+1;

var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomDiceImage1;


var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;

  var x1= document.querySelectorAll("img")[0];
  x1.setAttribute("src",randomImageSource1);

  var x2= document.querySelectorAll("img")[1];
  x2.setAttribute("src",randomImageSource2);


if (randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Draw";
}
else if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player1 wins";
}
else{
  document.querySelector("h1").innerHTML="Player2 wins 🚩";
}
