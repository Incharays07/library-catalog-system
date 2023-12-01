function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform login logic (replace with actual authentication)
    if (username === "admin" && password === "password") {
        alert("Login successful! Redirecting to the main page.");
        // Redirect to the main application page
        window.location.href = "welcome.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function register() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Perform registration logic (replace with actual registration)
    if (newPassword === confirmPassword) {
        alert("Registration successful! Redirecting to the login page.");
        // Redirect to the login page
        window.location.href = "login.html";
    } else {
        alert("Passwords do not match. Please try again.");
    }
}
