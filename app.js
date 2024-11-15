
const clearButton = document.querySelector(".clear-button");
const todoInput = document.querySelector("#todo-input");

clearButton.addEventListener("click", function() {
    todoInput.value = "";
});
let tasks = []; 
let plusInfo=document.querySelector(".plus-info")
 plusInfo.addEventListener("click",()=> {
    const input = document.getElementById("todo-input");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const task = { id: Date.now(), text: taskText }; 
        tasks.push(task); 

        renderTasks(); 

        input.value = ""; 
        document.querySelector(".todo-input-container").style.display = "none";
    }

})
function renderTasks() {
    const list = document.getElementById("todo-list");
    list.innerHTML = ""; 

    tasks.forEach((task, index) => {
        let listItem = document.createElement("li");

        listItem.textContent = `${index + 1}. ${task.text}`; 

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerHTML = "✕";
        deleteButton.onclick = function () {
            deleteTask(task.id); 
        };

        list.appendChild(listItem);
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);
    });

    document.getElementById("todo-list").style.border =
    tasks.length ? "1px solid #C4C4C4" : "none";
    

}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId); 
    renderTasks(); 
}

let plusicon=document.querySelector(".plus-icon")
plusicon.addEventListener("click",()=>{
    let addText=document.querySelector(".todo-input-container")
    addText.style.display="block"

});
let isSorted = false;
const sortIcon = document.querySelector(".icon-1");

sortIcon.addEventListener("mouseover", function() {
    sortIcon.src = isSorted ? "/pictureJs/Group91.svg" : "/pictureJs/Group73.svg";
});

sortIcon.addEventListener("mouseout", function() {
    sortIcon.src = isSorted ? "/pictureJs/Group90.svg" : "/pictureJs/Group74.svg";
});

let isAscending = true; 
let originalOrder = []; 

sortIcon.addEventListener("click" , ()=>{
  

    tasks.sort((a, b) => {
        if (isAscending) {
            return a.text.localeCompare(b.text);
        } else {
            return b.text.localeCompare(a.text);
        }
    });

    isAscending = !isAscending;
    renderTasks(); 
    isSorted = !isSorted;
    sortIcon.src = isSorted ? "/pictureJs/Group90.svg" : "/pictureJs/Group74.svg";
})

renderTasks();
