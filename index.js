function roll(){

var dice1 = Math.floor(Math.random() * 6) + 1;

var imgsrc1 = ("images/dice" + dice1 + ".png");

document.querySelector(".img1").setAttribute("src", imgsrc1);

var dice2 = Math.floor(Math.random() * 6) + 1;

var imgsrc2 = ("images/dice" + dice2 + ".png");

document.querySelector(".img2").setAttribute("src", imgsrc2);

if (dice1 > dice2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (dice2 > dice1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}

}