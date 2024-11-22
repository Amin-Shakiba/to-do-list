const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value;
    if(!text) return;

    const listItem = document.createElement("li");
    listItem.textContent = text;
    list.appendChild(listItem);

    input.value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    listItem.appendChild(deleteBtn);
    deleteBtn.style.backgroundColor = "#111";

    deleteBtn.addEventListener("click", () => {
        listItem.remove();
    })

    list.addEventListener("click", () => {
        listItem.classList.toggle("job-done");
    })
})

