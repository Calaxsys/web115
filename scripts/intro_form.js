let courseCount = 2;
const courseLabelsAndValues = [];

// Function for adding course to courses section
function addCourse() {
  const container = document.getElementById('course_container');
  const div = document.createElement('div');
  div.className = 'course_entry';

  div.innerHTML = `
    <label for="course_${courseCount}">
      <textarea name="course_${courseCount}" id="course_${courseCount}" placeholder="Reason for taking this course...." required></textarea>
    </label>
  `;

  container.appendChild(div);
  courseCount++;
}

function courseToPage() {
  let i = 0;

  while (true) {
    const nameInput = document.getElementById(`course[${i}]name`);
    const reasonInput = document.getElementById(`course[${i}]reason`);

    if (!nameInput || !reasonInput) break;

    const nameLabel = document.querySelector(`label[for="course[${i}]name"]`).textContent;
    const reasonLabel = document.querySelector(`label[for="course[${i}]reason"]`).textContent;

    courseLabelsAndValues.push({
      nameLabel,
      nameValue: nameInput.value,
      reasonLabel,
      reasonValue: reasonInput.value
    });

    i++;
  }
}

document.getElementById('intro_form').addEventListener('submit', function (event) {
  event.preventDefault();

  const output = document.getElementById('form_output');
  const firstName = document.getElementById('firstname').value;
  const middle = document.getElementById('middle_initial').value;
  const lastName = document.getElementById('lastname').value;
  const nickname = document.getElementById('nickname').value;
  const adjective = document.getElementById('adjective').value;
  const animal = document.getElementById('animal').value;

  // Pulling form labels to make dynamic content
  const personalBackground = document.querySelector('label[for="personal_background"]').textContent;
  const professionalBackground = document.querySelector('label[for="professional_background"]').textContent;
  const academicBackground = document.querySelector('label[for="academic_background"]').textContent;
  const subjectBackground = document.querySelector('label[for="subject_background"]').textContent;
  const computerLabel = document.querySelector('label[for="computer_type"]').textContent;

  // Pulling values from form submission
  const personalBgInfo = document.getElementById('personal_background').value;
  const proBgInfo = document.getElementById('professional_background').value;
  const academicBgInfo = document.getElementById('academic_background').value;
  const subjectBgInfo = document.getElementById('subject_background').value;
  const computerValue = document.getElementById('computer_type').value;

  // Combine names together
  let fullName = firstName;
  if (middle) {
    fullName += ` ${middle}.`;
  }
  fullName += ` ${lastName}`;

  output.innerHTML = `
    <h2 class="form_name">${fullName} | ${adjective} ${animal}</h2>
    <div>
      <ul>
        <li>
          <p><strong>${personalBackground}</strong> ${personalBgInfo}</p>
        </li>
        <li>
          <p><strong>${professionalBackground}</strong> ${proBgInfo}</p>
        </li>
        <li>
          <p><strong>${academicBackground}</strong> ${academicBgInfo}</p>
        </li>
        <li>
          <p><strong>${subjectBackground}</strong> ${subjectBgInfo}</p>
        </li>
        <li>
          <p><strong>${computerLabel}</strong> ${computerValue}</p>
        </li>
      </ul>
    </div>
  `;
});