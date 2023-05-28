const z = "I'd rather be a bird than a fish";

function reverse(str) {
  const splitArray = str.split(" ");
  var SentenceLength = splitArray.length - 1;
  var ReverseString = "";
  for (
    SentenceLength;
    SentenceLength >= 0;
    SentenceLength = SentenceLength - 1
  ) {
    ReverseString = ReverseString + splitArray[SentenceLength] + " ";
  }
  return ReverseString;

  const rev = [...str.split(" ")].reverse();
  return rev.reduce((s, c) => s + " " + c).trim();
}

console.log(reverse(z));

const arr = ["one", "two"];
const pot = [...arr];

// console.log(splitArray[0]);

var x = "cat";

x = x + "dog";
