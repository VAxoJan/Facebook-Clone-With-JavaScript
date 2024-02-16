const data = JSON.parse(localStorage.getItem("savedData")) || [];

const enterButton = document.getElementById("loginBtn");
const enterPassword = document.getElementById("password");

const loginUser = document.getElementById("email");
const passwordUser = document.getElementById("password");

enterButton.addEventListener("click", () => {
    const result = data.find(el => el.email === loginUser.value && data.find(el => el.password === passwordUser.value));
    if(result) {
        window.location.href = "postside.html"
    }
});


enterPassword.addEventListener("keypress" , (event) => {
    if(event.key === "Enter") {
        enterButton.click();
    }
});

enterButton.addEventListener("click", () => {
    if(loginUser.value.length < 8 && passwordUser.value.length < 8) {
        loginUser.style.border = "1px solid red";
        passwordUser.style.border = "1px solid red";
    }
});
