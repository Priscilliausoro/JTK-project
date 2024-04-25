document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);

    // Display form data (you can send it to a server or process it further)
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Here you can send the formData to a server using fetch or XMLHttpRequest
});