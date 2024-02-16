const namesElement = document.getElementById("name");
const savedData = JSON.parse(localStorage.getItem("savedData"));

if (savedData !== null && Array.isArray(savedData) && savedData.length > 0 && savedData[savedData.length - 1].email) {

    const lastEmail = savedData[savedData.length - 1].email;
    namesElement.textContent = lastEmail;
} else {
    namesElement.textContent = "ემეილი ვერ მოიძებნა";
}


const postInput = document.getElementById("postInput");
const container = document.getElementById("container");
const newPst = document.getElementById("newPost");

postInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        if (postInput.value.trim()) {
            const newPost = document.createElement("div");
            newPost.id = "newPost"
            newPost.textContent = postInput.value.trim();
            container.appendChild(newPost);
            postInput.value = "";
            newPost.style.marginTop = "20px";
            newPost.style.width = "100%";
            newPost.style.height = "50px";
            newPost.style.backgroundColor = "#fff";
            newPost.style.borderRadius = "10px";
            newPost.style.display = "flex";
            newPost.style.alignItems = "center";
            newPost.style.justifyContent = "space-around";
            const delll = document.createElement("button");
            delll.textContent = "X";
            delll.style.cursor = "pointer";
            delll.id = "deleteButton";
            newPost.appendChild(delll);
            printTime()
        } else {
            console.log("Error dzamiaa :))");
        }
    }
});

function printTime() {
    const newDate = document.createElement("main");
    const time = new Date().toLocaleTimeString();
    newDate.textContent = time;
    container.appendChild(newDate);
}

const deleteDiv = document.getElementById("deleteButton");

container.addEventListener("click", (event) => {
    if (event.target && event.target.id === "deleteButton") {
        const postToDelete = event.target.parentElement;
        const dateToDelete = postToDelete.nextElementSibling;
        postToDelete.remove();
        if (dateToDelete.tagName === "MAIN") {
            dateToDelete.remove();
        }
    }
});


const logout = document.getElementById("logout");

logout.addEventListener("click", () => [
    window.location.href = "./index.html"
]);