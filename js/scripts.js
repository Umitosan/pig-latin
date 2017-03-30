// Pig Latin definition
// words beginning with a vowel -> add "way" to the end.
//
// For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
//
// If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
//
// For words beginning with "y", treat "y" as a consonant.

// var reg = /^[a-zA-Z]/.test(userLetter);

// BUSINESS LOGIC

// Retruns true if arg is vowel, else false (consonant)
var isVowelFunc = function(letterToMatch) {
  var vowelsArr = ["a","e","i","o","u"];
  var test = vowelsArr.indexOf(letterToMatch);
  // remeber, indexOf returns "-1" when no match is found
  if (test === -1) {
    return false;
  } else if (test >= 0) {
    return true;
  } else {
    return 0;
  }
};

// add "way" to the end of a word
var addWayFunc = function(tmpStr) {
  var newStr = tmpStr.concat("way");
  return newStr;
};

var masterFunk = function(userStr) {
  var userStrSplit =  userStr.split(" ");
  var wordArray = [];
  var finalArray = [];
  userStrSplit.forEach(function(userWord) {
    wordArray = userWord.split("");
    wordArray.forEach(function(userLetter) {
        // test 1st letter for vowel
        var tmp = isVowelFunc(userLetter);
        console.log(userLetter , " : is vowel? : " , tmp);
      });
    });
  return finalArray;
};


// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#pigform").submit(function(event) {
    event.preventDefault();
    // Gather the user's sentence
    var userSent = $("input#piggy").val();
    // console.log(masterFunk(userSent));
    // reveal the output area
    $(".output").show();
    // show all the resultant data
    $("span#result").text(userSent);
    $("span#resultFinal").text(masterFunk(userSent));

  });
});
