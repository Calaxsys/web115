(function () {
  const nameForm = document.getElementById('name-form');
  if (!nameForm) {
    console.error("Form not found");
    return;
  }

  nameForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const middleInitial = document.getElementById('middle-initial').value;
    const lastName = document.getElementById('last-name').value;

    let fullName = firstName;
    if (middleInitial) {
      fullName += ` ${middleInitial}.`;
    }
    fullName += ` ${lastName}`;

    document.getElementById('greeting').textContent = `Welcome to Fizzbuzz ${fullName}!`;

    const counter = parseInt(prompt(`How high do you want to count, ${firstName}?`));

    if (isNaN(counter) || counter <= 0) {
      alert("Please enter a valid number.");
      return;
    }

    const wordList = document.getElementById('word-list');
    wordList.innerHTML = "";

    const words = ["Game Design", "Level Creation", "Boss Battles", "Open Worlds", "Player Choice", "Story Mode", "Power Ups", "Next Level"];

    for (let i = 1; i <= counter; i++) {
      let listItem = document.createElement('li');
      let evenOrOdd = (i % 2 === 0) ? "The number is even" : "The number is odd";
      listItem.textContent = `${words[i % words.length]} - ${evenOrOdd}`;
      wordList.appendChild(listItem);
    }
  });
})();
