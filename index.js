var randomnumber1 =Math.floor(Math.random() * 6 +1);
var randoming="images/dice" + randomnumber1 +".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randoming);

var randomnumber2 =Math.floor(Math.random() * 6 +1);
var randoming2="images/dice" + randomnumber2 +".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randoming2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Winner:Player 1";
}
else{
    document.querySelector("h1").innerHTML="Winner:Player 2";
}