document.getElementById('name_form').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('first_name').value;
  const middleInitial = document.getElementById('middle_initial').value;
  const lastName = document.getElementById('last_name').value;

  let fullName = firstName;
  if (middleInitial) {
    fullName += ` ${middleInitial}.`;
  }
  fullName += ` ${lastName}`;

  document.getElementById('greeting').textContent = `${fullName}!`;
});
