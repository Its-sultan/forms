
                                                                            
// Switching between login and sign-up forms
document.getElementById('showSignUp').addEventListener('click', function() {
  document.querySelector('.wrapper').classList.add('active');
});

document.getElementById('showLogin').addEventListener('click', function() {
  document.querySelector('.wrapper').classList.remove('active');
});


// Optional toggle for single button switch
const toggleButton = document.getElementById('toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.querySelector('.wrapper').classList.toggle('active');
  });
}

// Login Form validation function
function validateLoginForm() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (!validateLoginUsername(username) || !validateLoginPassword(password)) {
    return false;
  }

  alert("Login successful");
  // Form submission if all fields are valid
  document.getElementById("loginform").submit();
}

// Validate Login Username (cannot be empty)
function validateLoginUsername(username) {
  if (username.trim() === "") {
    alert("Login username cannot be empty");
    return false;
  }
  return true;
}

// Validate Login Password (must contain letters, numbers, symbols, and be 8+ characters long)
function validateLoginPassword(password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Login password must be at least 8 characters long, contain letters, numbers, and symbols");
    return false;
  }
  return true;
}
