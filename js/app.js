// creating array to store the cards
const mcards = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];
// calling shuffle function
shuffle(mcards);
// defining cardsContainer
var cardsContainer = document.querySelector('.deck');
var card;
var opencard = [];
var matchcard = [];
console.log(mcards);
let j = 0;
// initialising the game
function play() {
  while (j < mcards.length) {
    card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<i class="${mcards[j]}"></i>`;
    cardsContainer.append(card);
    clickcard(card);
    j++;
  }
}
let firstclick = 1;
// initialising the click function
function clickcard(card) {
  card.addEventListener("click", function() {
    if (firstclick) {
      starttimer();
      firstclick = 0;
    }
    const currentcard = this;
    const previouscard = opencard[0];

    if (opencard.length === 1) {
      card.classList.add("open", "show", "disable");
      opencard.push(this);
      // calling compare function
      compare(currentcard, previouscard);
    } else {
      currentcard.classList.add("open", "show", "disable");
      opencard.push(this);
    }
  });
}

//comparision between currentcard and previouscard
function compare(currentcard, previouscard) {
  if (currentcard.innerHTML === previouscard.innerHTML) {
    currentcard.classList.add("match");
    previouscard.classList.add("match");
    matchcard.push(currentcard, previouscard);
    opencard = [];
    // calling gameover function
    gameover();
  } else {
    // setting timer function to flip the card with in 150milli seconds
    setTimeout(function() {
      currentcard.classList.remove("open", "show", "disable");
      previouscard.classList.remove("open", "show", "disable");
    }, 150);
    opencard = [];
  }
  // add move
  addmove();
}
// creating game over function
function gameover() {
  if (matchcard.length === mcards.length) {
    stoptimer();
    // displaying popup after winning the game
    swal({
        title: "Congratulations!!!...\n" + starrating() + "\n Time:" + min + "minutes" + time + "seconds" + "\n Moves:" + (move + 1),
        confirmButtonText: "\n play again",
        type: "success"
      },
      function() {
        location.reload();
      }
    );
  }
}
// defining moves
const moves = document.querySelector(".moves");
let move = 0;
moves.innerHTML = 0;

function addmove() {
  move += 1;
  moves.innerHTML = move;
  rating();
}
// defining stars
var star = document.querySelector(".stars");
var star1 = `<li><i class="fa fa-star"></i></li>`;
star.innerHTML = star1 + star1 + star1;
// star rating function displays stars based on moves
function rating() {
  if (move < 10) {
    star.innerHTML = star1 + star1 + star1;
  } else if (move < 13) {
    star.innerHTML = star1 + star1;
  } else {
    star.innerHTML = star1;
  }
}
// defining timer
const timer = document.querySelector(".timer");
let livetime, time = 0,
  min = 0;

function stoptimer() {
  clearInterval(livetime);
}
// creating start timer which intializes after first click
function starttimer() {
  var p = document.querySelector('.min');
  var q = document.querySelector('.sec');

  livetime = setInterval(function() {
    // Increase the time by 1
    p.innerHTML = min;
    q.innerHTML = time;
    time++;
    if (time == 60) {
      min += 1;
      time = 0;
    }

    // Update the HTML Container with the new time
    timer.innerHTML = min + "m" + time + "s";
  }, 1000);
}


const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", function() {
  // Delete ALL cards
  cardsContainer.innerHTML = "";

  // Call `play` to create new cards
  play();

  // Reset the game
  restart();

});

function restart() {

  window.location.reload();
}
// Start the game for the first time!
play();
// creating shuffle function which randomly display the cards
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function starrating() {
  if (move < 10) {
    starr = "🌟🌟🌟";
  } else if (move < 13) {
    starr = "🌟🌟";
  } else {
    starr = "🌟";
  }
  return starr;
}
