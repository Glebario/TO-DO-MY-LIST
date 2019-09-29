var arrTasks = [];
var arrTasksDone = [];


var teamplateTask = document.querySelector('#task').content.querySelector('.task');
//console.log(teamplateTask)
var taskСontainer = document.querySelector('.content_task');

var btnAdd = document.querySelector('.add');
var btnRemove = document.querySelector('.remove');

//---------------------------------------------добовление задач---------------------------------------
function createTask (){
    var task = teamplateTask.cloneNode(true);
    arrTasks.push(task)

    task.addEventListener('click', doneTask);//счетчик выполненных задач (ОБЬЯВЛЕНИЕ СОБЫТИЯ)
    return task
};

function addTask(){
    var fragment = document.createDocumentFragment();
    fragment.appendChild(createTask());

    taskСontainer.appendChild(fragment);
    return fragment
};
//---------------------------------------------удоление задач---------------------------------------
function removeTask(){
    var task = taskСontainer.querySelector('.task'); 
    arrTasks.splice(0, 1);

    if(task){
        task.parentNode.removeChild(task)
    };
};


//----------------------------------------------События------------------------------------------
(function events(){
    btnAdd.addEventListener('click', addTask);
    btnAdd.addEventListener('click', createCounterTotalTask);

    btnRemove.addEventListener('click', removeTask);
    btnRemove.addEventListener('click', removeCounterTotalTask);

})();


//---------------------------------------------счетчики---------------------------------------
//----------------------------счетчик всех задач-------------
function createCounterTotalTask(){
    var counterTotalTask = document.querySelector('#counterTotalTaskSpan');
    
     counterTotalTask.textContent = String(arrTasks.length);
};

//----------------------------счетчик всех задач (удоление)-------------
function removeCounterTotalTask(){
    var counterTotalTask = document.querySelector('#counterTotalTaskSpan');
    counterTotalTask.textContent = String(arrTasks.length);

    arrTasksDone.splice(0, 1);
    var counterDoneTask = document.querySelector('#counterDoneTaskSpan');
    counterDoneTask.textContent = String(arrTasksDone.length);
       
};


//-----------------------------------------------выполненные задачи---------------------------

function doneTask(){
    let selectedTask;

    taskСontainer.onclick = function(event) {
        let targetTask = event.target; // где был клик?
        var checkDoneTask = targetTask.classList.contains("doneTask");
        if(checkDoneTask == false){
            arrTasksDone.push(targetTask); // добовление выполненной задачи в масив
        };

        highlight(targetTask); // подсветить task
    };

    function highlight(li) {
        selectedTask = li;
        var checkDoneTask = selectedTask.classList.contains("doneTask");
        if(checkDoneTask == false){
            selectedTask.classList.add('doneTask'); // подсветить новую задачу
        }
        else{
            selectedTask.classList.remove('doneTask');
            arrTasksDone.splice(0, 1);
        }

        //---------------------------------------- счетчик выполненных задач-------------
        var counterDoneTask = document.querySelector('#counterDoneTaskSpan');
        counterDoneTask.textContent = String(arrTasksDone.length);
    };


};