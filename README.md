# Memory Game Project

## Table of Contents

- [Instructions](#instructions)
- [Play The Game](#play-the-game)
- [To get the Starter Code](#To-get-the-Starter-Code)
- [What Will I Build?](#What-Will-I-Build)
- [How the Game Works](#How-the-Game-Works)
- [Development Strategy](#Development-Strategy)
- [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Play the Game

play the game [here](https://yoteshjami.github.io/memory-game/.)

## To get the Starter Code

If you'd like to start from scratch without any files, you are encouraged to do so! You learn the most by developing on your own! But, it can be a bit challenging having to start from scratch, so we do provide a starter project to use. You can download the starter code through either:

- The Memory Game project repository on GitHub:<https://github.com/udacity/fend-project-memory-game>
- This zipped folder:<https://github.com/udacity/fend-project-memory-game/archive/master.zip> This starter code has a static, non-interactive version of the project so you can get a jump-start on development.

# What Will I Build?

The Memory Game Project is all about demonstrating your mastery of JavaScript. You'll build a complete browser-based card matching game (also known as Concentration). But this isn't just any memory game! It's a shnazzy, well-designed, feature-packed memory game! The styling of the game is up to you, but here's what we came up with:

## How the Game Works

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match! Each turn:

- The player flips one card over to reveal its underlying symbol.
- The player then turns over a second card, trying to find the corresponding card with the same symbol.
- If the cards match, both cards stay flipped over.
- If the cards do not match, both cards are flipped face down.
- The game ends once all cards have been correctly matched.
- Displaying the popup after winning the match.

## Development Strategy

For this project, you will be writing most of your code in `js/app.js.` Note that it's very important that you plan your project before you start writing any code! Break your project down into small pieces of work and strategize your approach to each one. With these bite-sized amounts, it'll be easier to debug and fix any issues that appear.

Feel free to implement your own design workflow, but if you get stuck -- here is a walkthrough to get you up and running!

1. **Start by building a grid of cards.** The rest of your game's functionality depends on this grid.

  - How many total pairs of cards would you have?

2. Take a quick look at all the HTML elements in `index.html.` Note the values for their classattributes. To manipulate the DOM, you'll be using many of the tools and methods you've learned on these elements (and on those that you will create)

3. Which data structure can you use to store these individual cards? This data structure can represent your entire list of cards, so it might be a good idea to save it to a variable

4. How you would iterate (i.e., loop) over this data structure?
5. Think about how you can create, say, an unordered list (i.e., bulleted list) in HTML from this structure
6. Are your cards randomly placed onto the grid? Note that the provided `shuffle()` function takes in an array parameter, and returns a shuffled version of that array
7. Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card, and the symbols are faced down
8. How can you use `CSS` properties like `transform` or opacity to represent the sides of a card?
9. **Add the functionality to handle clicks.** This should reveal the "hidden" side of each card. Clicking on the first card should turn it over, show the symbol, and remain turned over. Clicking on a different card must also turn it over and show the symbol.
10. Which event are you listening for (hint: you were just reading it)?
11. How can that event affect CSS? Hint: Look at the static page (index.html) provided in the starter code. Pay special attention to the class values on open/shown cards, matched cards, and the rest of the cards (i.e., those without their symbols shown). Which `classListmethods` can you use to change the value of an element's `class` upon that event happening?
12. Recall what you know about event delegation. Rather than adding an event listener to each individual card (which can be a costly operation), is there a way to add just one to a common parent node? Take a closer look at `index.html` to see which node that could be
13. Toggling cards will happen pretty often in this game. To keep your code clean and DRY, consider refactoring this operation into its own function
14. **Work on the matching logic.** At this point, your users can flip over cards on the grid! Now the question is: how does your game "know" if a player guesses correctly or incorrectly?
15. Think about how you can temporarily store opened cards. After all, one card turned over needs to be compared to another card turned over. Which data structure would be great to temporarily hold these turned-over cards? Make sure this data structure doesn't hold too many cards! We're only looking for a match between two cards; it wouldn't make sense to store and compare, say, three cards at the same time
16. How can you prevent the user from selecting the same card twice?
17. When comparing two different cards for a match, what exactly can you compare? (**_hint:_** open up index.html and look at the child of each `<li>` element)
18. If the two cards match, they stay turned over

  - How does a match affect the class of these cards? (hint: check the class values of the two matched cards in the static `index.html` file from the starter code)

19. If the two cards do not match, they turn back

  - How does this affect the data structure that temporarily stored these cards?

20. All this logic to match cards seems like it'll be used quite often. Consider refactoring the code for checking for a match into its own function

21. **Create the winning condition.** How does your game "know" if a player has won?

22. Your user should see a modal when the game ends
23. What information can this modal show? See below!
24. **Implement additional functionality:**
25. Move counter. The game should display the number of moves the player has made

  - Declaring a variable with an initial value 0 is a good start
  - How can you use `innerHTML` to actually display that value?

26. Timer. This timer should start when the player starts a game, and end when the player wins the game **_Hint:_** How can `setTimeout()` come into play here?

27. Star rating. The player should begin with a certain number of stars displayed on the screen. The number of moves made during the game should visually decrease this star rating **_Hint:_** You'll probably want to build this only after you've build the move counter

28. Reset button. This should allow the player to reset the entire grid as well as all the above
29. **We recommend saving most of the styling until the very end.** Allow your game logic and functionality to dictate the styling.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out

<contributing.md>.</contributing.md>

# Memory Game Project

## Table of Contents

- [Instructions](#instructions)
- [To get the Starter Code](#To-get-the-Starter-Code)
- [What Will I Build?](#What-Will-I-Build)
- [How the Game Works](#How-the-Game-Works)
- [Development Strategy](#Development-Strategy)
- [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## To get the Starter Code

If you'd like to start from scratch without any files, you are encouraged to do so! You learn the most by developing on your own! But, it can be a bit challenging having to start from scratch, so we do provide a starter project to use. You can download the starter code through either:

- The Memory Game project repository on GitHub:<https://github.com/udacity/fend-project-memory-game>
- This zipped folder:<https://github.com/udacity/fend-project-memory-game/archive/master.zip> This starter code has a static, non-interactive version of the project so you can get a jump-start on development.

# What Will I Build?

The Memory Game Project is all about demonstrating your mastery of JavaScript. You'll build a complete browser-based card matching game (also known as Concentration). But this isn't just any memory game! It's a shnazzy, well-designed, feature-packed memory game! The styling of the game is up to you, but here's what we came up with:

## How the Game Works

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match! Each turn:

- The player flips one card over to reveal its underlying symbol.
- The player then turns over a second card, trying to find the corresponding card with the same symbol.
- If the cards match, both cards stay flipped over.
- If the cards do not match, both cards are flipped face down.
- The game ends once all cards have been correctly matched.
- Displaying the popup after winning the match.

## Development Strategy

For this project, you will be writing most of your code in `js/app.js.` Note that it's very important that you plan your project before you start writing any code! Break your project down into small pieces of work and strategize your approach to each one. With these bite-sized amounts, it'll be easier to debug and fix any issues that appear.

Feel free to implement your own design workflow, but if you get stuck -- here is a walkthrough to get you up and running!

1. **Start by building a grid of cards.** The rest of your game's functionality depends on this grid.

  - How many total pairs of cards would you have?

2. Take a quick look at all the HTML elements in `index.html.` Note the values for their classattributes. To manipulate the DOM, you'll be using many of the tools and methods you've learned on these elements (and on those that you will create)

3. Which data structure can you use to store these individual cards? This data structure can represent your entire list of cards, so it might be a good idea to save it to a variable

4. How you would iterate (i.e., loop) over this data structure?
5. Think about how you can create, say, an unordered list (i.e., bulleted list) in HTML from this structure
6. Are your cards randomly placed onto the grid? Note that the provided `shuffle()` function takes in an array parameter, and returns a shuffled version of that array
7. Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card, and the symbols are faced down
8. How can you use `CSS` properties like `transform` or opacity to represent the sides of a card?
9. **Add the functionality to handle clicks.** This should reveal the "hidden" side of each card. Clicking on the first card should turn it over, show the symbol, and remain turned over. Clicking on a different card must also turn it over and show the symbol.
10. Which event are you listening for (hint: you were just reading it)?
11. How can that event affect CSS? Hint: Look at the static page (index.html) provided in the starter code. Pay special attention to the class values on open/shown cards, matched cards, and the rest of the cards (i.e., those without their symbols shown). Which `classListmethods` can you use to change the value of an element's `class` upon that event happening?
12. Recall what you know about event delegation. Rather than adding an event listener to each individual card (which can be a costly operation), is there a way to add just one to a common parent node? Take a closer look at `index.html` to see which node that could be
13. Toggling cards will happen pretty often in this game. To keep your code clean and DRY, consider refactoring this operation into its own function
14. **Work on the matching logic.** At this point, your users can flip over cards on the grid! Now the question is: how does your game "know" if a player guesses correctly or incorrectly?
15. Think about how you can temporarily store opened cards. After all, one card turned over needs to be compared to another card turned over. Which data structure would be great to temporarily hold these turned-over cards? Make sure this data structure doesn't hold too many cards! We're only looking for a match between two cards; it wouldn't make sense to store and compare, say, three cards at the same time
16. How can you prevent the user from selecting the same card twice?
17. When comparing two different cards for a match, what exactly can you compare? (**_hint:_** open up index.html and look at the child of each `<li>` element)
18. If the two cards match, they stay turned over

  - How does a match affect the class of these cards? (hint: check the class values of the two matched cards in the static `index.html` file from the starter code)

19. If the two cards do not match, they turn back

  - How does this affect the data structure that temporarily stored these cards?

20. All this logic to match cards seems like it'll be used quite often. Consider refactoring the code for checking for a match into its own function

21. **Create the winning condition.** How does your game "know" if a player has won?

22. Your user should see a modal when the game ends
23. What information can this modal show? See below!
24. **Implement additional functionality:**
25. Move counter. The game should display the number of moves the player has made

  - Declaring a variable with an initial value 0 is a good start
  - How can you use `innerHTML` to actually display that value?

26. Timer. This timer should start when the player starts a game, and end when the player wins the game **_Hint:_** How can `setTimeout()` come into play here?

27. Star rating. The player should begin with a certain number of stars displayed on the screen. The number of moves made during the game should visually decrease this star rating **_Hint:_** You'll probably want to build this only after you've build the move counter

28. Reset button. This should allow the player to reset the entire grid as well as all the above
29. **We recommend saving most of the styling until the very end.** Allow your game logic and functionality to dictate the styling.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out

<contributing.md>.</contributing.md>
