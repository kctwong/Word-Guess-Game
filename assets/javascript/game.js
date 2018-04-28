// window.onload = function(){

    // var wordset;
    // var word;
    // var answer;    // 
    // var counter;        //count correct guessess
    // var lives;          //lives
    // var win;            //number of wins
    // var remaining;

    //get elements
    // var showlives = document.getElementById("mylives");
    // var buttonreset = document.getElementById("reset");


    // Actual game!
    // play = function(){

    var masterWordList = // Word list
        [
        "apple",   
        "strawberry",
        "orange",
    ];

// const totalMaxTries = 10; // Maximum number of tries player has
// const space = "space";
// Updates the image depending on how many guesses


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








    
    // }
    
    // Initiate the game!
//     function resetgame(){
//         livesleft = 10;
//         answer = [];
//         guessedletter =[];
//         gamestarted = false;
//         //create the guessing word
//         for (var i=0; i< word.length; i++){
//             answer.push("_");
//             console.log(push);
//         }
//         updatedisplay();
//     };
        

//     // Update display
//     function updatedisplay(){
//         document.getElementById("wins").innerText = win;
//         document.getElementById("currentword").innerText = "";
//         for (var i=0; i<answer.length; i++){
//             document.getElementById("currentword").innerText += answer[i];
//         }
        
//         document.getElementById("mylives").innerText = livesleft;
//         document.getElementById("guessedletter").innerText = guessedletter;

//     };


//         document.onkeyup = function(event){
//         var keypress = String.fromCharCode(event.keyCode).toLowerCase();
//         console.log(keypress);
//             if (hasfinished){
//                 resetgame();
//                 hasfinished = false;
//             } else{
//                 if(keypress >= 65 && keypress <=90){
//                     makeguess(keypress);
//                 }
//             }
//         };


//     function makeguess(letter){
//         if (livesleft >0){
//             if (!gamestarted){
//                 gamestarted = true;
//             }
//             if (guessedletter.indexOf(letter) === -1){
//                 guessedletter.push(letter);
//                 evaluate(letter);
//             }
//         }
//         updatedisplay();
//         // checkwin();
//     }


//     function evaluate(letter){
//     var positions = [];
//     for (var i=0; i<word.length; i++){
//         if(answer[i] === letter){
//             positions.push(i);
//         }
//     }
//     if (positions.length <=0){
//         livesleft--;
//     } else {
//         for (var i=0; i<positions.length; i++){
//             answer[positions[i]] = letter;
//         }
//     }
// }

// }

    

//     // function checkwin(){
//     //     if (answer.indexOf("_" === -1){
//     //         document.getElementById()

//     //     }




//     // }


    
//             // for (var i=0; i<word.length; i++){
//             //     if (word[i] === keypress){
//             //         answer[i].innerHTML = keypress;

//             //     }
//             //     var j = (word.indexOf(keypress)); 
//             //         if (j === -1){
//             //             livesleft -= 1;
//             //         }
//             //     }
//             // }    

//         // if (chosenword.includes(keypress) != true && ){
//         //         remainingguess--;
//         // } else if ()
    


//     // Reset
//     // buttonreset.onclick = function(){




//     // }
    
    
//     // create an empty array that is filled with underscores to match the number of letters in the word

//     // while (remaining > 0){

        
//     // }

//     // for (var i=0; i< chosenword.length; i++){
//     //     // answer[i] = "_";
//     //     answer.push("_");
//     // }

//     // console.log(answer);

//     // var remaining = word.length;

//     // $()

//     // for (var j=0; j<word.length; j++){
//     //     if(word[j] === guess){
//     //         answer[j] = guess;
//     //         remaining--;

    //     }
    // }


