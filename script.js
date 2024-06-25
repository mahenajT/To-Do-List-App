const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to Add a New Task
function AddTask() {
  if (inputBox.value === "") {
    alert("You Must Add Something!");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listContainer.appendChild(listItem);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7"; //Unicode for '×' to serve as a delete button
    listItem.appendChild(span);
  }
  inputBox.value = ""; // Clear the input field after adding the task
  saveData(); // Save the updated list to local storage
}
// Event Listener to Handle Clicks on List Items and Delete Buttons
listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked"); // Mark task as completed or uncompleted
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove(); // Remove the task

      saveData();
    }
  },
  false
);

// Function to Save Task List to Local Storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to Load and Display Tasks from Local Storage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Initial Call to Display Tasks on Page Load
showTask();
