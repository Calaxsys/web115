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

// Get the 3 numbers to divide by
function getDivisors() {
  const firstDivisor = document.getElementById('first-divisor').value;
  const secondDivisor = document.getElementById('second-divisor').value;
  const thirdDivisor = document.getElementById('third-divisor').value;

  return [firstDivisor, secondDivisor, thirdDivisor];
}

// Get the users submitted words to replace fizz, buzz, and bang
function getWordsFromUser() {
  const firstWord = document.getElementById('first-word').value;
  const secondWord = document.getElementById('second-word').value;
  const thirdWord = document.getElementById('third-word').value;

  return [firstWord, secondWord, thirdWord];
}

// Get the total number of words to count
function getWordCount() {
  const wordCount = document.getElementById('total-count').value;
  return wordCount;
}

// Check if a number is evenly divisble by a divisor
function isMultiple(num, divisor) {
  return num % divisor === 0;
}

// Determine which word gets pushed based on isMultiple funciton
function getWord(num, baseWord) {
  let words = [];
  const [firstDivisor, secondDivisor, thirdDivisor] = getDivisors();
  const [firstWord, secondWord, thirdWord] = getWordsFromUser();

  // Number evenly divisble by firstDivisor
  if (isMultiple(num, firstDivisor)) {
    words.push(firstWord);
  }

  // Number evenly divisble by secondDivisor
  if (isMultiple(num, secondDivisor)) {
    words.push(secondWord);
  }

  // Number evenly divisble by thirdDivisor
  if (isMultiple(num, thirdDivisor)) {
    words.push(thirdWord);
  }
  return words.length > 0 ? words.join(", ") : baseWord;
}

document.getElementById('name-form').addEventListener('submit', function (event) {
  event.preventDefault();

  greeting();
  const [firstDivisor, secondDivisor, thirdDivisor] = getDivisors();

  const wordList = document.getElementById('word-list');
  wordList.innerHTML = "";

  const baseWord = document.getElementById('default-word').value;
  const wordCount = getWordCount();

  for (let i = 1; i <= wordCount; i++) {
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

