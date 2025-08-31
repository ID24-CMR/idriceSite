
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault(); // prevent form submission 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("rememberMe").checked;
    const error = document.getElementById("error");

    if(username === "" || password === "" ) {
        error.textContent = "Please fill in all fields.";
        error.style.color = "red";
        return;
    }

    if(username === "admin" && password === "4321") {
        error.style.color = "lightgreen";
        error.textContent = "Login successful";
        if (remember) {
        localStorage.setItem("savedUser", username);
    }else{
        localStorage.removeItem("savedUser");
    }

    setTimeout(() => {
        window.location.href = "dashboard.html"; // redirect
    }, 1000);
    }else{
        error.style.color = "red";
        error.textContent = "Invalid username or password";
    }
});


// auto-fill username if saved in localStorage
window.addEventListener("DOMContentLoaded", () => {
    const savedUser = localStorage.getItem("savedUser");
    if(savedUser) {
        document.getElementById("username").value = savedUser;
        document.getElementById("rememberMe").checked = true;
    }
});