

    var masterWordList = // Word list
        [
        "apple",   
        "strawberry",
        "orange",
        "ice-cream",
        "pancake",
    ];

// Hangman game object
var hangman = {
    wordlist: masterWordList,       //  Holds the word list, this can be any array of string
    guessingword: [],
    guessedletter: [],  // is the word to be guessed
    currentword: "",
    lastwordIdx: -1,
    counter: 0,
    livesleft: 0,
    win: 0,
    remaining: 0,
    // gamestarted: false,
    hasfinished: true,
    

    resetgame: function () {

    // wordlist is returns an array of word. Randomly generates position of the array to return a word 
        var idx = -1;
            do {
                idx = Math.floor(Math.random()*this.wordlist.length);
            } while (idx === this.lastwordIdx)
        
        this.currentword = this.wordlist[idx];
    // zero out working arrays. guessingword builds working arrays
    // guessedletters holds all letters guessed
        this.guessingword = [];
        this.guessedletter = [];
    
    // reset remaining attempts
        this.livesleft = 10;
    // have not finished the game
        this.hasfinished = false;


    //initialize the word for guessing by populating number of _ equal to the number of characters in the random word
    //if the word has a hyphen, generates a hyphen in the index 
        for (var i=0; i< this.currentword.length; i++){
            if (this.currentword[i] === "-"){
                this.guessingword.push("-");
            } else if (this.currentword[i] === " "){
                this.guessingword.push("space");
            } else {
                this.guessingword.push("_");
            }
        }
    
        this.updatedisplay();
    
    },

    // update the total wins
    // update the HTML display area

    updatedisplay: function() {
        document.getElementById("totalwins").innerText = this.win;
        var tempword = ""
        for (var i=0; i< this.guessingword.length; i++){
            if (this.guessingword[i] === "space"){
                tempword += "&nbsp;";
            } else{
                tempword += this.guessingword[i];
            }
        }
        document.getElementById("currentword").innerHTML = tempword;
        document.getElementById("remainingguesses").innerText = this.livesleft;
        document.getElementById("guessedletter").innerText = this.guessedletter;

    },

    // for letter already guessed, keep track of it under guessedletter, only one copy 
    makeaguess: function (letter){
        if (this.livesleft > 0){
            if (this.guessedletter.indexOf(letter) === -1){
                this.guessedletter.push(letter);
                this.evaluateguess(letter);
            } 
        };
            this.checkwinlose();
            this.updatedisplay();
    },

    evaluateguess: function (letter) {
        var positions = [];
        for (var i=0; i<this.currentword.length; i++){
            if (this.currentword[i] === letter){
                positions.push(i);
            }
        }

        if (positions.length <= 0){
            this.livesleft--;
        } else{
            for (var i=0; i<positions.length; i++){
                this.guessingword[positions[i]] = letter;
            }
        }
    },


    checkwinlose: function (){
            if (this.guessingword.indexOf("_") === -1){
                this.win++;
                this.hasfinished = true;
                return;
            }
            if (this.remainingguess <=0){
                this.hasfinished = true;
                return;
            }
        },
    };

    // function isLetter(keyCode) {
    //     return (keyCode >= 65 && keyCode <= 90);
    // };


        document.onkeydown = function(event){
        var keypress = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(keypress);
            if (hangman.hasfinished){
                hangman.resetgame();
                hangman.hasfinished = false;
            } else {
                // if (isLetter(event.keyCode)){
                if(event.keyCode >= 65 && event.keyCode <=90){
                    // hangman.makeaguess(event.key.toLowerCase());
                    hangman.makeaguess(keypress);
                }
            }
        
        };








  


