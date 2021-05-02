let addToDoButton = document.getElementById("addToDoButton");
let inputField = document.getElementById("inputField");
let todoContainer = document.getElementById("todoContainer");
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
     var paragraph = document.createElement("P");
     paragraph.classList.add("paragraph-styling");
     paragraph.innerText = inputField.value;
     todoContainer.appendChild(paragraph);
     inputField.value = "";
}
