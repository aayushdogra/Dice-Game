
document.querySelector("button").addEventListener("click", function(){
  var dice = this.innerHTML;

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 -- 6
  var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png -- dice6.png
  var randomImageSrc1 = "images/" + randomDiceImage1;  // images/dice1.png -- images/dice6.png
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSrc2 = "images/" + randomDiceImage2;
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

  buttonAnimation(dice);
});

function buttonAnimation(keyPressed) {

  var activeButton = document.querySelector("." + keyPressed);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
