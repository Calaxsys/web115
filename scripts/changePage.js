function loadScriptForSection(sectionId) {
  const existingScript = document.getElementById('dynamic_section_script');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.id = 'dynamic_section_script';
  script.src = `scripts/${sectionId}.js`;
  script.defer = true;

  script.onload = function () {
    console.log(`${sectionId}.js loaded successfully!`);
  };

  document.body.appendChild(script);
}

document.querySelectorAll('header nav a, div a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');

    document.querySelectorAll('main > section').forEach((section) => {
      section.style.display = section.id === targetId ? 'block' : 'none';
    });

    const pageTitle = this.getAttribute('data-title') || targetId;
    document.title = `Chris Troublefield's Creative Tamarin Studios | WEB115 | ${pageTitle}`;

    // Load specific sections respective JS script file
    loadScriptForSection(targetId);
  });
});

document.querySelectorAll('main > section').forEach((section, index) => {
  section.style.display = index === 0 ? 'block' : 'none';
});

