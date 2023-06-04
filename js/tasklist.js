const tasklist = document.querySelector("#task-list")
const taskForm = document.querySelector(".addForm")

taskForm.addEventListener('submit', addTask)
tasklist.addEventListener('click', deleteTask)

let taskarray = [];

window.addEventListener('load', loadTasks)

//add a new task
function addTask(e){
    e.preventDefault();

    //Get the new element value
    var newItem = document.querySelector("#task").value
    //create a new li
    var li = document.createElement('li')
    //append the task text to the li
    li.appendChild(document.createTextNode(newItem))
    //create the delete btn
    var deleteButton = document.createElement('button')
    deleteButton.className = 'delete';
    deleteButton.appendChild(document.createTextNode('X'))
    //add the button to the li
    li.appendChild(deleteButton);
    //gives an id to the li and append to the array
    li.id = taskarray.length
    taskarray.push(newItem);
    //append the li to the list
    tasklist.appendChild(li)
    //send to the local storage
    saveTask()

}

function saveTask(){
    localStorage.setItem('tasks', JSON.stringify(taskarray)) 

}


function deleteTask(e){
    if(e.target.classList.contains('delete')){

        var li = e.target.parentElement;
        taskarray.splice(li.id, 1)
        tasklist.removeChild(li)
        saveTask()

    }
}
function loadTasks() {
    if (localStorage.getItem('tasks')) {
      taskarray = JSON.parse(localStorage.getItem('tasks'));
      taskarray.forEach(function (task) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(task));
        var deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.appendChild(document.createTextNode('X'));
        li.appendChild(deleteButton);
        tasklist.appendChild(li);
      });
    }
  }
