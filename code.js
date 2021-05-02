const addToDoButton = document.getElementById("addToDoButton");
const inputField = document.getElementById("inputField");
const todoContainer = document.getElementById("todoContainer");
const paragraph = document.createElement("P");
//check Enter press
addEventListener("keypress", (e) => {
     if (e.key === "Enter") {
          createTask();
     }
});

// check click
addToDoButton.addEventListener("click", function () {
     createTask();
     paragraph.addEventListener("click", function () {
          paragraph.style.textDecoration = "line-through";
     });
     paragraph.addEventListener("dblclick", function () {
          todoContainer.removeChild(paragraph);
     });
});

// create Task
function createTask() {
     paragraph.classList.add("paragraph-styling");
     paragraph.innerText = inputField.value;
     todoContainer.appendChild(paragraph);
     inputField.value = "";
}
