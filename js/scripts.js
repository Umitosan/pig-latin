// Business Logic
var vowelsArr = ["a","e","i","o","u"];
var mySentenceArr = ["a","b","c"]
var newSentArr = [];

mySentenceArr.forEach(function(letter) {
  if (letter === "a") {
    newSentArr.push(letter);
  } else {
    newSentArr.push("-");
  }
});

console.log("newsent= " , newSentArr);

// for (i = 0 ; i < mySentence.length ; i++) {
//   if (mySentence[i] === a e i o u ) {
//     push ay to end of mySentence;
//   }
//
// does begin with vowel?
// does word have only one letter?


$(document).ready(function() {
  $("form#pigform").submit(function(event) {
    event.preventDefault();

    var userSent = $("input#piggy").val();

    console.log();

    $(".output").show();
    $("p#result").text(userSent);


  });
});
