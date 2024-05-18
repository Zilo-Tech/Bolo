document.addEventListener("DOMContentLoaded", function () {
  const showJobFormBtn = document.getElementById("showJobFormBtn");
  const jobFormContainer = document.getElementById("jobFormContainer");
  const jobDetailsContainer = document.getElementById("jobDetailsContainer");
  const jobFormStep2 = document.getElementById("jobForm2");
  const createJobBtn = document.querySelector("#jobFormContainer .create-job-btn");

  showJobFormBtn.addEventListener("click", function () {
    showJobFormBtn.style.display = "none";
    jobFormContainer.style.display = "block";
    jobDetailsContainer.style.display = "none";
  });

  createJobBtn.addEventListener("click", function () {
    if (validateStep2()) {
      const jobTitle = document.getElementById("jobTitle").value;
      const jobDescription = document.getElementById("jobDescription").value;

      jobDetailsContainer.innerHTML += `
        <h5>Job Details:</h5>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Job Description:</strong> ${jobDescription}</p>
      `;

      document.getElementById("jobTitle").value = "";
      document.getElementById("jobDescription").value = "";

      jobFormContainer.style.display = "none";
      jobDetailsContainer.style.display = "block";
      showJobFormBtn.style.display = "block";
    }
  });

  function validateStep2() {
    const jobTitle = document.getElementById("jobTitle").value;
    const jobDescription = document.getElementById("jobDescription").value;
    if (!jobTitle || !jobDescription) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  }
  showJobFormBtn.addEventListener("click", function () {
    showJobFormBtn.style.display = "none";
    jobFormContainer.style.display = "block";
    jobFormContainer.scrollIntoView({ behavior: "smooth" });
  });
});
