document.querySelector('#add-btn').onclick = function (){
    if(document.querySelector('.new-task input').value.length==0){
        alert('please enter a task')
    }            
    else{
        document.querySelector('.tasks').innerHTML += `
        <div class="task">
        <span>${document.querySelector('.new-task input').value}</span>
        <span class="delete"><i class="fa-solid fa-trash"></i></span>
        </div>`
    }
    var current_task = document.querySelectorAll('.delete');
    for(var i=0;i<current_task.length;i++){
         current_task[i].onclick =function(){
            this.parentNode.remove();
         }
    }

    document.querySelector('.new-task input').value ="";
}

    