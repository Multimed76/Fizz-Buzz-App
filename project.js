document.getElementById('fizzplay').value = '';
$(document).ready(function(){
	
	var output;//print out the output to the user
	//fizz buzz function logic
	function fizzBuzz(nmb){
			//start the Fizz/Buzz App
		    for(var c = 1; c < nmb;c++){
		
		      if(c % 3 == 0 && c % 5 == 0){
		
		        output = "Fizz Buzz";
		
		      } else  if(c % 3 == 0){
		
		       output = "Fizz";
		
		      } else 	if(c % 5 == 0){
		
		        output = "Buzz";
		
		      } else 	{
		
		        output = c;
		
		      }
		
		      document.write("<br />" + output)
		   }
		}
	//the new number creation will happen  here
	function newNmbr(newArray){
		var newNmb = "";
		for (var r  = 0; r < newArray.length; r++){
			
			newNmb += newArray[r];
			//send our parsed int to our fizz buzz app to play the game
			if(r == (newArray.length-1)){
			 	newNmb = Math.round(newNmb);//round up to a whole numbers and get rid of the float data
				fizzBuzz(newNmb);//start the game with the newly created functionla data
			//	alert(newNmb);
			}
		}
	}
	//here is where it all starts to sort through deleting blank spaces or letters from the user's input field
	function validateInput(TxtInput){
			var inputVal = TxtInput.split("");//convert the input chars into an array
			var newInput = [];//store the useful numeric values into a new array
			//start validating every string value of the inputVal Array
			for (var r  = 0; r <= inputVal.length; r++){
				
				if(inputVal[r] == "."){
					
					newInput.push(inputVal[r]);
					//alert('decimal')
					
				} else if(isNaN(inputVal[r]) || inputVal[r] == " "){
					
					//alert('letter');

				} else {
					
					newInput.push(inputVal[r]);
					//alert('number');
					
				}
				
				if(r == inputVal.length){
				//send the new useful numbers and decimal place to be reassembled into a new number
				newNmbr(newInput);
				//alert(newInput)
				}
			}
	}
	//
	$('.Btn').on('click', function(){
			//
			var inputValA = document.getElementById('fizzplay').value;//store the input text from user into inputVal variable
			if(inputValA == ""){
				alert("Enter Numbers only please!");
			} else {
				//let's test and validate our user input
				validateInput(inputValA);
			}

	});
});
