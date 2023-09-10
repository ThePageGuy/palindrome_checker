const getword = () => {
  const word = document.getElementById("text").value;

  let display = palindrome(word);

  document.getElementById("check").innerHTML = display;
};

const palindrome = (str) => {
  let letter = str.split("");
  let sentence = [];
  const pattern = /[A-Za-z0-9]/i;
  letter.forEach((element) => {
    if (pattern.test(element)) {
      sentence.push(element.toLowerCase());
    }
  });

  let final = true;

  let inverse = [...sentence];

  inverse.reverse();

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] != inverse[i]) {
      final = false;
      break;
    }
  }

  return final;
};
