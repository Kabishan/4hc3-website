const USERNAME = "4hc3_ta";
const PASSWORD = "4hc3";

function showHorizontalPrototypeMessage() {
	alert("This feature was not implemented vertically.");
}

function showPassword() {
	var password = document.getElementById("password");
	if (password.type === "password") {
		password.type = "text";
	} else {
		password.type = "password";
	}
}

async function validateLogin() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var valid = true;

	var invalidUsernameFeedback = document.getElementById("invalid-username-feedback");
	var invalidPasswordFeedback = document.getElementById("invalid-password-feedback");
	var loginSuccessMessage = document.getElementById("login-success-msg");

	invalidUsernameFeedback.style.display = "block";
	invalidPasswordFeedback.style.display = "block";
	loginSuccessMessage.style.display = "block";

	if (username.value === USERNAME && password.value === PASSWORD) {
		invalidUsernameFeedback.style.display = "none";
		invalidPasswordFeedback.style.display = "none";

		username.style.border = "2px solid green";
		password.style.border = "2px solid green";
	}
	else {
		username.style.border = "2px solid red";
		password.style.border = "2px solid red";

		invalidUsernameFeedback.innerText = (username.value.length === 0) ? 
		"Username cannot be left empty" : "Username is not correct";

		invalidPasswordFeedback.innerText = (password.value.length === 0) ?
		"Password cannot be left empty" : "Password is not correct";

		valid = valid && false;
	}

	if (valid) {
		loginSuccessMessage.innerText = "Correct Username and Password. Logging you in...";

		await sleep(3000);
		loginSuccessMessage.style.display = "none";
		await sleep(2000);
		window.location.href = "../4hc3-website/seating.html";
	}
	else {
		loginSuccessMessage.style.display = "none";
	}
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}