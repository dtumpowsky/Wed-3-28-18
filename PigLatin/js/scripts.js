//Backend

var translate = function(sentence) {
  var vowels = ["a", "e", "i", "o", "u"];
  var text1 = $("#word").text();
  console.log(text1);
  var arr = text1.split("");

  for(i = 0; i < arr.length; i++)
    for(j = 0; j < vowels.length; j++)
    console.log(vowels.length);
};



//Frontend

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#word").val();
    var userInput = translate(sentence);
    $("#result").text(userInput);


    // var text1 = $(sentence).text();
    var vowelArr = ["a", "e", "i", "o", "u"];
    var arr = sentence.split("");
    var spaces = [" "];
    var spacePos =[];
    // var firstPos =[];


    // console.log(arr)
    for (i = 0; i < arr.length; i++) {
      for (j = 0; j < vowelArr.length; j++) {
         if (arr[i] == vowelArr[j]) {
           arr[i] = "-";
          //  console.log(arr[i])
        }
      }
    }
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == spaces) {
        spacePos.push([i]);

      }
    }
    // for (i=0; i <)
    var firstLetters = spacePos.map(function(space) {
      return parseInt(space) + 1;
    });
console.log(spacePos);
console.log(firstLetters);






  });
});
