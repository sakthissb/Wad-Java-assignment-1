document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Dummy credentials
    const username = 'user123';
    const password = 'password123';

    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    const errorMessage = document.getElementById('error-message');

    // Simple login validation
    if (inputUsername === username && inputPassword === password) {
        // Redirect to the task management page (index.html)
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
