const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
  if (inputBox.value === "") {
    alert("You Must Add Something!");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listContainer.appendChild(listItem);
  }
}
