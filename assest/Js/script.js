document.addEventListener("DOMContentLoaded", function () {
    // Registration Logic
    document.getElementById("registerButton").addEventListener("click", function () {
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const registerError = document.getElementById("registerError");

        registerError.innerHTML = ""; // Clear previous error messages

        if (!username || !email || !password || !confirmPassword) {
            registerError.innerHTML = "All fields are required.";
            return;
        }

        if (password !== confirmPassword) {
            registerError.innerHTML = "Passwords do not match.";
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        if (existingUsers.some(user => user.email === email)) {
            registerError.innerHTML = "Email is already registered. Please login.";
            return;
        }

        const newUser = { username, email, password };
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        registerError.style.color = "green";
        registerError.innerHTML = "Registration successful! Redirecting to login...";
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1500);
    });
});


document.getElementById("loginButton").addEventListener("click", function () {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const loginError = document.getElementById("loginError");
    

    loginError.innerHTML = "";

    if (!email || !password) {
        loginError.innerHTML = "Please enter email and password.";
        return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
        user => user.email === email && user.password === password
    );

    if (user) {
        loginError.style.color = "green";
        loginError.innerHTML = `Welcome back, ${user.username}! Redirecting...`;
        setTimeout(() => {
            window.location.href = "./pages/Main.html";
        }, 1500);
    } else {
        loginError.innerHTML = "Invalid email or password. No account found.";
    }
});