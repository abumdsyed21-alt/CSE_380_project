function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

/* Demo login redirect */
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Login successful!");
    window.location.href = "index.html";
});
