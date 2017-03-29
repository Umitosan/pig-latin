// Business Logic



var myFunc = function(userStr) {

  var userArrLetters =  userStr.split("");
  var vowelsArr = ["a","e","i","o","u"];
  var newArr = [];

  userArrLetters.forEach(function(userArrLetter) {
    vowelsArr.forEach(function(vowel) {
      if (userArrLetter === vowel) {
        newArr.push(userArrLetter);
      }
    });
  });

  return newArr;
};


// 
// var myFunc = function(tmpArr) {
//   tmpArr.split();
//   return tmpArr;
// }



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

    console.log(myFunc(userSent));


    $(".output").show();
    $("p#result").text(userSent);


  });

});
