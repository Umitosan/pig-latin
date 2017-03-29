// Business Logic

// var reg = /^[a-zA-Z]/.test(userLetter);

// Vowel checker function
var isVowelFunc = function(letterToMatch) {
  var vowelsArr = ["a","e","i","o","u"];
  var test = vowelsArr.indexOf(letterToMatch);
  if (test === -1) {

    return false;
  } else if (test >= 0) {
    return true;
  } else {
    return 0;
  }

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
        console.log(tmp);

      });

    });

  return finalArray;
};



// User Logic
$(document).ready(function() {
  $("form#pigform").submit(function(event) {
    event.preventDefault();

    var userSent = $("input#piggy").val();

    // console.log(masterFunk(userSent));

    $(".output").show();
    $("span#result").text(userSent);
    $("span#resultFinal").text(masterFunk(userSent));

  });
});
