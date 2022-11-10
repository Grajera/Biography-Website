window.onload = function (){ // function wrapper The load event is fired when the whole page has loaded
	
	// Getting all the li elements for the numbers on the calculator
	var data = document.getElementsByTagName("li"); 
	// Obtain a NodeList of all of the <p> elements in the document
	var screen = document.querySelectorAll(' p')[0]; 
	// Get all objects and child objects of clear_data class
	var clear_data = document.getElementsByClassName('clear_data')[0];
	// Get all objects and child objects of sNotation class
	var sNotation = document.getElementsByClassName('sNotation')[0];
	// create flag for a below function and a hold variable for future needs
	var flag = 0, hold;

	for(var i = 0; i < data.length; i ++){
		  if(data[i].innerHTML === '=')
		  {     // When "=" is clicked in the <li> run calculate function
			    data[i].addEventListener("click", calculate(i));
		  }
		  else if(data[i].innerHTML === "+/-")
		  {		// When "+/-" is clicked in the <li> run flipFlop function
			data[i].addEventListener("click", flipFlop(i));
		  }
		  else if(data[i].innerHTML === "%")
		  {		// When "%" is clicked in the <li> run flipFlop function
			data[i].addEventListener("click", percentage(i));
		  }
		  else
		  {		// if "=" was clicked again run addToCurrentValue function
			   data[i].addEventListener("click", addToCurrentValue(i));
		  }

		  
	}
	
	function addToCurrentValue (i){ // take current input
		return function(){
			if (data[i].innerHTML === "÷") { // if divide is pressed 
               screen.innerHTML  +=  "/" ; // add the divide sign to string in screen.innerHTML
      }else if(data[i].innerHTML === "x"){  // if multiply is pressed 
			      screen.innerHTML += "*";  // we add multiply sign to string in screen.innerHTML
		   } else{
			   screen.innerHTML  += data[i].innerHTML;  /* else we just add together again.
		    											   this will still work with subtraction because that
		   											       is just adding a negitive to a positive.*/
		}
	  };
   }

   function flipFlop (i){ // take data 
	return function(){
		screen.innerHTML *= -1; // multiple input by -1 and get negitive or positive. 
							    // This just flips signs
  };
}

function percentage (i){ // take data 
	return function(){
		screen.innerHTML /= 100; // divide by 100 to get a percentage so 10 -> .10
  };
}


   clear_data.onclick = function () { // on C button click
    screen.innerHTML = ''; /*when the clear_data buton is clicked we just set the HTML to 
						     nothing to clear screen*/
  }; 

  sNotation.onclick = function () { // on scientific notation button click
    if(!flag && screen.innerHTML != 0)	// check for flag also check if there is a value to change.
	{
		let temp = parseFloat(screen.innerHTML).toExponential(3); // get html number in sciencetific notation
		hold = parseFloat(screen.innerHTML); // hold that data for future use
		screen.innerHTML = temp.toString(10); // return to innerHTML as a string base 10
		flag = 1; // set flag
	}
	else if(flag && screen.innerHTML != 0) // if flag is set also if there is a value to change.
	{	
		screen.innerHTML = hold.toString(); // put orevious value back on screen
		flag = 0; //remove flag
	}
  }; 


 function calculate(i) { // take data 
    return function () {
		/* make screent HTML equal to function return screen.innerHTML this will let us read the 
		 string that is on the screen and do the math on it.
		 shorthand for this: function anonymous() {return number + numer}
		 Could use eval() here but it is slower and dangerous for security
		 im not sure how goof Function is but it seems like a better alternative.*/
        screen.innerHTML = Function("return " + screen.innerHTML)();
    };
  }
};