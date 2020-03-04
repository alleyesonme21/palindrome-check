// business logic
var palindromeCheck = function(word) {
  wordReverse = word.split("").reverse().join("");
  if (word === wordReverse) {
    return true;
  } else {
    return false;
  };
};

// user interface logic
$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    $(".not").empty();
    var word = $("input#word").val();
    var result = palindromeCheck(word);
    
    if (!result) {
    $(".not").text("not ");
    };
    $("#result").show();
  });
});