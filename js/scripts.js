// Business Logic
// Define master function that takes a user's sentence and returns a sentence in Pig Latin



var masterFunk = function(userStr) {

  var sentenceArray =  userStr.split(" ");
  var vowelsArr = ["a","e","i","o","u"];
  var wordArray = [];
  var finalArray = [];

  sentenceArray.forEach(function(userWord) {

    wordArray = userWord.split("");

    wordArray.forEach(function(userLetter) {

      vowelsArr.forEach(function(currentVowel) {

        if (userLetter === currentVowel) {
          finalArray.push(userLetter);
        }

      });
    });
  });
  return finalArray;
};



// User Logic
$(document).ready(function() {
  $("form#pigform").submit(function(event) {
    event.preventDefault();

    var userSent = $("input#piggy").val();

    console.log(masterFunk(userSent));

    $(".output").show();
    $("p#result").text(userSent);

  });
});
