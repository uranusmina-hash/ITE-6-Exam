let form = document.getElementById('student-form');
let btnClear = document.getElementById('btn-clear');
let previewSection = document.getElementById('preview-section');
let previewOutput = document.getElementById('preview-output');

// Submit button - get values and display in preview section
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let course = document.getElementById('course').value;
  let year = document.getElementById('year').value;
  let section = document.getElementById('section').value;
  let email = document.getElementById('email').value;

  // Show alert if any field is empty
  if (!name || !course || !year || !section || !email) {
    alert('Please fill in all fields.');
    return;
  }

  // Display all entered values in the preview section
  previewOutput.innerHTML =
    '<p><strong>Student Name:</strong> ' + name + '</p>' +
    '<p><strong>Course:</strong> ' + course + '</p>' +
    '<p><strong>Year Level:</strong> ' + year + '</p>' +
    '<p><strong>Section:</strong> ' + section + '</p>' +
    '<p><strong>Email Address:</strong> ' + email + '</p>';
});

// Clear button - clear all input fields and preview section
btnClear.addEventListener('click', () => {
  form.reset();
  previewOutput.innerHTML = '';
});