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


// Sign-Up Form validation function
function validateSignUpForm() {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
  
    if (!validateSignUpUsername(username) || !validateEmail(email) || !validateSignUpPassword(password)) {
      return false;
    }
  
    alert("Sign-Up successful");
    document.getElementById("signupForm").submit();
  }
  
  // Validate Sign-Up Username (cannot be empty)
  function validateSignUpUsername(username) {
    if (username.trim() === "") {
      alert("Sign-Up username cannot be empty");
      return false;
    }
    return true;
  }
  
  // Validate Email (for sign-up)
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  }
  
  // Validate Sign-Up Password (must contain letters, numbers, symbols, and be 8+ characters long)
  function validateSignUpPassword(password) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Sign-Up password must be at least 8 characters long, contain letters, numbers, and symbols");
      return false;
    }
    return true;
  }
