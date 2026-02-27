let task = [];

const input = document.querySelector("#taskInput")
const btn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")


btn.addEventListener("click", function () {
    const taskResult = input.value.trim(); 
    if(taskResult){
    task.push(taskResult);
    showapp(task);
        
    }
    input.value ="";
    
});

function showapp(arr) {
    taskList.innerHTML="";
    if(arr.length > 0) {
        for(const item of arr){
            let li = document.createElement("li")
            li.textContent = item;
            li.style.margintop = "10px";
            let button = document.createElement("button")
            button.style.marginLeft = "10px";
            button.innerHTML = `
            <i class="fa-solid fa-trash"></i>
            `;

            button.addEventListener("click", function(){
                arr.splice(arr.indexOf(item), 1);
                deleteTask();
            });
            li.append(button);
            taskList.append(li);
        }
            
    } else {
        taskList.innerHTML = `
        <li>
        NO TASK TO SHOW!
        </li>
        `;
    }
}
showapp(task);

function deleteTask() {
    showapp(task);
}