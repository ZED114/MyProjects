function validateForm() {
    // Reset error messages
    document.getElementById('errorMessages').innerHTML = '';

    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var age = parseInt(document.getElementById('age').value);
    // Check if fields are empty
    if (firstName === '' || lastName === '' || email === '' || phone === '' || isNaN(age)) {
      displayError('All fields are required.');
      return;
    }

    // Check email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayError('Invalid email format.');
      return;
    }

    // Check if age is under 18
    if (age < 18) {
      displayError('Sorry, you are not eligible to apply for a loan.');
      return;
    }



    // If no errors, redirect to another HTML page
    window.location.href = 'krediChoiceEnglish.html'; // Replace with the actual page URL
  }

  function displayError(message) {
    var errorMessageElement = document.getElementById('errorMessages');
    errorMessageElement.innerHTML += '<p>' + message + '</p>';
  }