document.getElementById('name-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const middleInitial = document.getElementById('middle-initial').value;
  const lastName = document.getElementById('last-name').value;

  let fullName = firstName;
  if (middleInitial) {
    fullName += ` ${middleInitial}.`;
  }
  fullName += ` ${lastName}`;

  document.getElementById('greeting').textContent = `${fullName}!`;

  const wordList = document.getElementById('word-list');
  wordList.innerHTML = "";

  const words = ["Game Design", "Level Creation", "Boss Battles", "Open Worlds", "Player Choice", "Story Mode", "Power Ups", "Next Level"];

  for (let i = 1; i <= 125; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `${words[i % words.length]}`;
    wordList.appendChild(listItem);
  }
});
