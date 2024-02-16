const input = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const button = document.getElementById("signUpBtn");


const storedData = localStorage.getItem("savedData");
const val = storedData ? JSON.parse(storedData) : [];


button.addEventListener("click", () => {
    if (input.value.length > 5 && password.value.length >= 8 && password.value.length <= 22 && rePassword.value === password.value) {
        const user = {email : input.value, password: password.value};
        val.push(user);
        localStorage.setItem("savedData", JSON.stringify(val));
        input.style.border = "1px solid green";
        password.style.border = "1px solid green";
        rePassword.style.border = "1px solid green";
        window.location.href = "index.html";

    } else {
        input.style.border = "1px solid red";
        input.style.outline = "none";
        password.style.border = "1px solid red";
        rePassword.style.border = "1px solid red";
        password.style.outline = "none";
        rePassword.style.outline = "none";
    }
});

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        button.click();
    }
});

password.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        button.click();
        password.style.outline = "none"
    }
});
rePassword.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        button.click();
    }
});

