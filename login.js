const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const username = document.querySelector("#username").value;
	const password = document.querySelector("#password").value;
    console.log(username)
    console.log(password)
	if (username === "admin" && password === "12345") {
		alert("Login Successful!");
		window.location.href = "main.html";
	} else {
		alert("Invalid Username or Password");
	}
});