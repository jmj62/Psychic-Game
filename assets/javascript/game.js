
/*
 * Global variables
 *		strLetters - a string list of letters
 *		nWins - # of nWins
 *		nLosses - # of nLosses
 *		nTries - # of nTries
 *		strUserChoices
 */
var strLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var nWins = 0;
var nLosses = 0;
var nTries = 9;
var strUserChoices = [];
/*
 * 	Func:
 *		document.onkeyup
 *
 *	Desc:
 *		this is called when the user his a key on the keyboard
 *		when this happens
 */
document.onkeyup = function()
{
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("userguess: " +userguess);

	//computer generated random letter usring method Math.random().

	var computerGuess = strLetters[ Math.floor( Math.random() * strLetters.length) ];
	console.log( "computer guess: " + computerGuess) ;

	//compare computer generated random letter and user intered letter
	//if user nWins,increase win count.

     if ( userguess === computerGuess )
	 {
		 	nTries = 9;
            nWins++
            console.log("Wins: " + nWins);
            document.getElementById("nWins").innerHTML = nWins;

    //push userguess value to strUserChoices array
    		strUserChoices.push(userguess);

    //Join strUserChoices array values with ",". after win, remove all strUserChoices
    //values.
    		console.log("full array " + strUserChoices.join(","));
            var myInput = (strUserChoices.join(","));
        	document.getElementById("myInput").innerHTML = myInput;
            strUserChoices = [];
	}

	//If userguess and computer guess are not same, try 9 times.
	else if (userguess !== computerGuess)
	{
		if (nTries > 0)
		{
               console.log(nTries);
               // document.getElementById("nTries").innerHTML = nTries;

            // Calculate # of guesses left.
               nTries--;
               document.getElementById("nTries").innerHTML = nTries;
               console.log(nTries);

            //push userguess value to strUserChoices array
                strUserChoices.push(userguess);

            //Join strUserChoices array values with ",". after win, remove all strUserChoices
    		//values.
        		console.log("full array " + strUserChoices.join(","));
        		var myInput = (strUserChoices.join(","));
        		document.getElementById("strUserChoices").innerHTML = myInput;
        }

	    //if user unable to guess after 9 nTries - increase loss and restart game
	    //without refresh

        else if (nTries === 0)
		{
                nTries = 9;
                nLosses++;
 				console.log("Loses: " + nLosses);
 				document.getElementById("nLosses").innerHTML = nLosses;
 				strUserChoices = [];
 		}
	}
}
