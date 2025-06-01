var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random() * 6);

image1 = "images/dice" + randomNumber1 + ".png";
image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!🚩";
} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").textContent = "Draw!🏳️";
}