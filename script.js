function parseResume() {
  const fileInput = document.getElementById("resumeInput");
  const file = fileInput.files[0];

  if (!file) return alert("Upload a resume.");

  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;

    // Dummy parser: extract dummy info
    const applicant = {
      name: "John Doe",
      email: "john@example.com",
      experience: "5 years",
      role: "Project Manager"
    };

    displayApplicant(applicant);
  };

  reader.readAsText(file);
}

function displayApplicant(app) {
  document.getElementById("applicantDetails").innerHTML = `
    <p><strong>${app.name}</strong></p>
    <p>${app.email}</p>
    <p>${app.experience}</p>
    <p>${app.role}</p>
  `;
}
