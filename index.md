<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangman</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Hangman!</h1>
        <form action="#" autocomplete="off">
            <label for="text">Guess a letter:</label>
            <input type="text" id="letterGuess" placeholder="enter a letter...">
            <button type="submit" id="submitBtn">Submit Guess</button>
            <button type="reset" onclick="window.location.reload()">Reset</button>
        </form>

        <h3 id="winLosemessage"></h3>
        <h3 id="solutionMessage"></h3>
        <h3 id="errorMessage" style="color: red; display: none">Error! only use letters</h3>

        <div class="game-area">
            <div class="gallows">
                <div class="base"></div>
                <div class="side"></div>
                <div class="top"></div>
                <div class="noose"></div>
            </div>
            <div class="hangman">
                <div id="head" class="hide"></div>
                <div id="torso" class="hide"></div>
                <div id="left-arm" class="hide"></div>
                <div id="right-arm" class="hide"></div>
                <div id="left-leg" class="hide"></div>
                <div id="right-leg" class="hide"></div>
            </div>
        </div>
        <div id="solution">
            <p id="l0"></p>
            <p id="l1"></p>
            <p id="l2"></p>
            <p id="l3"></p>
            <p id="l4"></p>
            <p id="l5"></p>
            <p id="l6"></p>
            <p id="l7"></p>
            <p id="l8"></p>
            <p id="l9"></p>
            <p id="l10"></p>
            <p id="l11"></p>
            <p id="l12"></p>
        </div>
        <div>
            <h3>Letters Guessed:</h3>
            <h5 id="usedLetters"></h5>
        </div>
    </div>
    <script src="wordlist.js"></script>
    <script src="app.js"></script>
</body>
</html>
