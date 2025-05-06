let courseCount = 2;
const courseLabelsAndValues = [];

// Function for adding course to courses section
function addCourse() {
  const container = document.getElementById('course_container');
  const div = document.createElement('div');
  div.className = 'course_entry';

  div.innerHTML = `
    <div class="form-group">
      <label for="course[${courseCount}]name">Course Name:</label>
      <input type="text" name="course[${courseCount}]name" id="course[${courseCount}]name" placeholder="Enter course name">
    </div>
    <div class="intro-txt-group">
      <label for="course[${courseCount}]reason">Reason for Taking:</label>
      <textarea name="course[${courseCount}]reason" id="course[${courseCount}]reason" cols="50" rows="5" placeholder="Reason for taking this course..."></textarea>
    </div>
  `;

  container.appendChild(div);
  courseCount++;
}

function deleteCourse() {
  const container = document.getElementById('course_container');
  const entries = container.getElementsByClassName('course_entry');

  if (entries.length > 0) {
    container.removeChild(entries[entries.length - 1]);
    courseCount--;
  }
}

function courseToPage() {
  let i = 0;
  while (true) {
    const nameInput = document.getElementById(`course[${i}]name`);
    const reasonInput = document.getElementById(`course[${i}]reason`);

    if (!nameInput || !reasonInput) break;

    const nameValue = nameInput.value.trim();
    const reasonValue = reasonInput.value.trim();


    // Skip this entry if either field is empty
    if (!nameValue || !reasonValue) {
      i++;
      continue;
    }


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

function hideForm() {
  document.getElementById('intro-form').style.display = "none";
}

function showForm() {
  document.getElementById('intro-form').style.display = "block";
  document.getElementById('show_form_btn').style.display = 'none';
}

document.getElementById('intro-form').addEventListener('submit', function (event) {
  event.preventDefault();
  courseToPage();
  hideForm();


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
  const interestingFact = document.querySelector('label[for="interesting_fact"]').textContent;

  // Pulling values from form submission
  const personalBgInfo = document.getElementById('personal_background').value;
  const proBgInfo = document.getElementById('professional_background').value;
  const academicBgInfo = document.getElementById('academic_background').value;
  const subjectBgInfo = document.getElementById('subject_background').value;
  const computerValue = document.getElementById('computer_type').value;
  const interestingFactInfo = document.getElementById('interesting_fact').value;

  // Combine names together
  let fullName = firstName;

  if (middle) {
    fullName += ` ${middle}.`;
  }

  if (nickname) {
    fullName += ` "${nickname}"`;
  }

  fullName += ` ${lastName}`;

  output.innerHTML = `
    <button id="show_form_btn" type="button">Show Form Again</button>
    <h2 id="intro-title">Introduction</h2>
    <h3 class="intro-sub">${fullName} | ${adjective} ${animal}</h3>
    <figure id="photo_output"></figure>
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
        <li>
          <p><strong>Courses that I am Taking and Why</strong></p>
          <ol id="course_list_output">
            ${courseLabelsAndValues.map((course, i) => `
            <li data-index="${i}">
            <p><strong>${course.nameValue}</strong> - ${course.reasonValue}</p>
            </li>
            `).join('')}
          </ol>
        </li>
        <li>
          <p><strong>${interestingFact}</strong> ${interestingFactInfo}</p>
        </li>        
      </ul>
    </div>
  `;

  const photoInput = document.getElementById('profile_photo');
  const photoOutput = document.getElementById('photo_output');

  photoOutput.innerHTML = '';

  const altText = document.getElementById('photo_alt').value || 'Submitted Photo';
  const img = document.createElement('img');
  const caption = document.createElement('figcaption');

  img.alt = altText;
  img.width = 360;
  img.height = 480;
  caption.innerHTML = `<em>${altText}</em>`;

  if (photoInput.files && photoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
      photoOutput.appendChild(img);
      photoOutput.appendChild(caption);
    };
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    // Use default image if none uploaded
    img.src = 'images/chris_photo.jpeg';
    photoOutput.appendChild(img);
    photoOutput.appendChild(caption);
  }

  document.getElementById('show_form_btn').addEventListener('click', function (e) {
    e.preventDefault;
    showForm();
  });
});