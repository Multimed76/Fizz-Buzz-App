$(document).on('ready', function() {
    var nmb = 100;
    //
    for(var c = 1; c < nmb;c++){

      if(c % 3 == 0){

        document.write("<br>"+ "Fizz");

      } else 	if(c % 5 == 0){

        document.write("<br>"+"Buzz")

      } else {

        document.write("<br>"+c)

      }

    /* if (theNumber is divisible by 3) then
    print "Fizz"
    else if (theNumber is divisible by 5) then
    print "Buzz"
    else theNumber is not divisible by 3 or 5 
    print theNumber*/

   }
});