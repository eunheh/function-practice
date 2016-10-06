// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else if (z > x && z > y) {
    return z;
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u" || char==="A" || char==="E" || char==="I" || char==="O" || char==="U") {
    return true;
  } else {
    return false;
  }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

//Could not get this to loop & keep only the first letter to be capitalized.
function translate(text){
    var y = "";
    for (count = 0; count >= text.length; count++); {
      if (!isVowel(text[count])){
        return (y = y + (text[count] + "o" + text[count]));
      } else {
        return (y = y + (text[count]));
      }
    }
  }

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
function reverse(string) {
  var x = string.length,
      y = "";
  while (x > 0) {
    y += string.substring(x - 1, x);
    x--;
  }
  return y;
}
