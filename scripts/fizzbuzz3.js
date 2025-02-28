// Get users name and output a greeting
function greeting() {
  const firstName = document.getElementById('first-name').value;
  const middleInitial = document.getElementById('middle-initial').value;
  const lastName = document.getElementById('last-name').value;

  let fullName = firstName;
  if (middleInitial) {
    fullName += ` ${middleInitial}.`;
  }
  fullName += ` ${lastName}`;

  document.getElementById('greeting').textContent = `Welcome to Fizzbuzz ${fullName}!`;
}

// Check if a number is evenly divisble by a divisor
function isMultiple(num, divisor) {
  return num % divisor === 0;
}

// Determine which word gets pushed based on isMultiple funciton
function getWord(num, baseWord) {
  let words = [];
  firstDivisor = 3;
  secondDivisor = 5;
  thirdDivisor = 7;

  // Number evenly divisble by firstDivisor
  if (isMultiple(num, firstDivisor)) {
    words.push("Exploration");
  }

  // Number evenly divisble by secondDivisor
  if (isMultiple(num, secondDivisor)) {
    words.push("Level Up");
  }

  // Number evenly divisble by thirdDivisor
  if (isMultiple(num, thirdDivisor)) {
    words.push("BANG!");
  }
  return words.length > 0 ? words.join(", ") : baseWord;
}

document.getElementById('name-form').addEventListener('submit', function (event) {
  event.preventDefault();

  greeting();

  const wordList = document.getElementById('word-list');
  wordList.innerHTML = "";

  const baseWord = "Game";
  const wordcount = 140;

  for (let i = 1; i <= wordcount; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = getWord(i, baseWord);

    // Adds a class based on multiple to change text color
    if (isMultiple(i, firstDivisor)) {
      listItem.classList.add('txt-clr-primary');
    }
    if (isMultiple(i, secondDivisor)) {
      listItem.classList.add('txt-clr-secondary');
    }
    if (isMultiple(i, firstDivisor) && isMultiple(i, secondDivisor)) {
      listItem.classList.remove('txt-clr-primary');
      listItem.classList.remove('txt-clr-secondary');
      listItem.classList.add('txt-clr-tertiary');
    }

    wordList.appendChild(listItem);
  }
});

