document.querySelectorAll('header nav a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');

    document.querySelectorAll('main > section').forEach((section) => {
      section.style.display = section.id === targetId ? 'block' : 'none';
    });
  });
});

document.querySelectorAll('main > section').forEach((section, index) => {
  section.style.display = index === 0 ? 'block' : 'none';
});