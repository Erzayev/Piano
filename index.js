/////         DETECTS BUTTON-PICTURE PRESS WITH MOUSE AND THEN MAKE SOUND   ///////


// adding loop to be able to attach EvenListener to all buttons in .drum class
for (var i = 0; i < document.querySelectorAll(".piano").length; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML; // give button in text format (exp: w, a, d)

    makeSound(buttonInnerHTML); // adding that button in text format to makeSound function
    buttonAnimation(buttonInnerHTML); // adding function to add & remove class to highlight once button pushed
  });
}

/////         DETECTS BUTTON-PICTURE PRESS WITH KEYBOARD AND THEN MAKE SOUND   ///////

document.addEventListener("keydown", function(eventYzn) {

  makeSound(eventYzn.key);
  // catches pressed key with keyboard and .key gives it in text format (exp: w, a, d)
  // then sends it to makeSound function

  buttonAnimation(eventYzn.key); // adding function to add & remove class to highlight once button pushed


})


// IF/ELSE can be used instead as well
// adding to every cached button a sound from above two Listeners

function makeSound(keyPressed) { //  using catched parameter from above function

  switch (keyPressed) { // using that parameter to switch to required sound
    case "a":
      var yznAudio = new Audio("sounds/DO.mp3");
      yznAudio.play();
      break;

    case "s":
      var yznAudio = new Audio("sounds/RE.mp3");
      yznAudio.play();
      break;

    case "d":
      var yznAudio = new Audio("sounds/MI.mp3");
      yznAudio.play();
      break;

    case "f":
      var yznAudio = new Audio("sounds/FA.mp3");
      yznAudio.play();
      break;

    case "g":
      var yznAudio = new Audio("sounds/SOL.mp3");
      yznAudio.play();
      break;

    case "h":
      var yznAudio = new Audio("sounds/LA.mp3");
      yznAudio.play();
      break;

    case "j":
      var yznAudio = new Audio("sounds/TI.mp3");
      yznAudio.play();
      break;

    case "k":
      var yznAudio = new Audio("sounds/DO_2.mp3");
      yznAudio.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("onPress");    // adding highlight class to button upon press

  setTimeout(function() {
    activeButton.classList.remove("onPress");   // removes highlight class from button after 100ms
  }, 100);

}
