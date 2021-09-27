let form = document.querySelector('#task_form') ; 
let taskList = document.querySelector('ul') ; 
let clearBtn = document.querySelector('#clear_task_btn') ; 
let filter = document.querySelector('#task_filter') ; 
let taskInput = document.querySelector('#new_task') ; 




form.addEventListener('submit' , addTask) ; 
taskList.addEventListener('click' , removeTask) ; 


function addTask(e)
{
    console.log('hi') ; 
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
            console.log(e.target.parentElement) ; 
        }
    }



}
