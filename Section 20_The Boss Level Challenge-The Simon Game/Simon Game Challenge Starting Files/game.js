var buttonColours = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function () {
  if (started === false) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function (event) {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  checkAnswer(userClickedPattern.length);
  animatePress(userChosenColour);
  playSound(userChosenColour);
});

//Random Number Generator
function nextSequence() {
  level = level + 1;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

  animatePress(randomChosenColour);
  playSound(randomChosenColour);
}

// Function to play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//Function to animate button
function animatePress(currentColour) {
  var id = "#" + currentColour;
  $(id).addClass("pressed");
  setTimeout(function () {
    $(id).removeClass("pressed");
  }, 100);
}

//Function to check answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel - 1] == userClickedPattern[currentLevel - 1]) {
    console.log("Correct");
  } else {
    playSound("wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);

  }

  if (level === currentLevel) {
    setTimeout(function(){
        nextSequence();
    }, 1000);
    userClickedPattern=[];
  }
}


//New game
function startOver(){
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    started = false;
}
