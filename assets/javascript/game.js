
    var masterWordList = // Word list
        [
        "apple",   
        "strawberry",
        "orange",
    ];


// Hangman game object
var hangman = {
    wordlist: masterWordList,       //  Holds the word list, this can be any array of strings

  
    guessingword: [],
    guessedletter: [],
    currentword: "",
    lastwordIdx: -1,
    counter: 0,
    livesleft: 0,
    win: 0,
    remaining: 0,
    gamestarted: false,
    hasfinished: false,
    

    resetgame: function () {
        var idx = -1;
        console.log(this);
        do {
            idx = Math.floor(Math.random()*this.wordlist.length);
        } while (idx === this.lastwordIdx)

        this.currentword = this.wordlist[idx];

        this.lastwordIdx = idx;

        this.lastwordIdx = idx;

        this.guessingword = [];
        this.guessedletter = [];

        this.livesleft = 10

        this.hasfinished = false;

        for (var i=0; i< this.currentword.length; i++){
            if (this.currentword[i] === "-"){
                this.guessingword.push("-");
            } else {
                this.guessingword.push("_");
            }
        }
    
        this.updatedisplay();
    
    },

    updatedisplay: function() {
        document.getElementById("totalwins").innerText = this.win;
        var tempword = ""
        for (var i=0; i< this.guessingword.length; i++){
            if (this.guessingword[i] === "space"){
                tempword += "&nbsp;"
            } else{
                tempword += this.guessingword[i];
            }
        }
        document.getElementById("currentword").innerHTML = tempword;
        document.getElementById("remainingguesses").innerText = this.livesleft;
        document.getElementById("guessedletter").innerText = this.guessedletter;

    },

    
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

        if (positions.length <=0){
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

        document.onkeyup = function(event){
        var keypress = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(keypress);
            if (hangman.hasfinished){
                hangman.resetgame();
                hangman.hasfinished = false;
            } else{
                if(event.keyCode >= 65 && event.keyCode <=90){
                    hangman.makeaguess(keypress);
                // } else {
                //     hangman.wrongKey.play();
                }
            }
        };








