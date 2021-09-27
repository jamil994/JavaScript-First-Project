let form = document.querySelector('#task_form') ; 
let taskList = document.querySelector('ul') ; 
let clearBtn = document.querySelector('#clear_task_btn') ; 
let filter = document.querySelector('#task_filter') ; 
let taskInput = document.querySelector('#new_task') ; 



filter.addEventListener('keyup' , filterTask)  ; 
form.addEventListener('submit' , addTask) ; 
taskList.addEventListener('click' , removeTask) ; 
clearBtn.addEventListener('click', clearTask) 
 


function addTask(e)
{
    //console.log('hi') ; 
    if(taskInput.value === '')
    {
        alert('Add a Task') ; 
    }
    else 
    {
        let li = document.createElement('li') ; 
        li.appendChild(document.createTextNode(taskInput.value )) ; 

        let link = document.createElement('a') ; 
        link.setAttribute('href', '#') ; 
        link.innerHTML = 'x' ; 
        li.appendChild(link) ; 
        
    
        taskList.appendChild(li) ; 

        storeTaskInLocalStorage(taskInput.value) ; 



        taskInput.value = '' ; 

    }
    e.preventDefault() ; 
}



function removeTask(e)
{
    if(e.target.hasAttribute("href"))
    {
        if(confirm("Are you Sure?"))
        {
            let ele = e.target.parentElement ;
            ele.remove() ; 
            console.log(e.target.parentElement) ; 
        }
    }
}

function clearTask(e)
{
    while(taskList.firstChild)
    {
        taskList.removeChild(taskList.firstChild) ; 
    }
}

function filterTask(e)
{
    let text = e.target.value.toLowerCase() ; 

    document.querySelectorAll('li').forEach(task => 
        {
            let item = task.firstChild.textContent ; 
            if(item.toLowerCase().indexOf(text) != -1)
            {
                task.style.display = 'block' ; 
            }
            else 
            {
                task.style.display = 'none' ; 
            }
        }) ; 
}

function storeTaskInLocalStorage(task)
{
    let tasks ; 
    if(localStorage.getItem('tasks') == null )
    {
        task = [] ; 
    }
    else 
    {
        tasks = JSON.parse(localStorage.getItem('tasks')) ; 
    }
    tasks.push(task) ; 
    localStorage.setItem('tasks' , JSON.stringify(tasks)) ; 
}

