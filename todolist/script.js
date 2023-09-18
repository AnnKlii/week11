const addTask = document.querySelector('.list__input');
const addButton = document.querySelector('.list__btn');
const list = document.querySelector('.list__list');

addButton.addEventListener('click',
    function () {
        const taskText = addTask.value;
        if (addTask.value !== '') {
            const newTask = document.createElement('li');
            newTask.innerHTML = taskText;
            list.append(newTask);
            addTask.value = "";
        }
    }
);

list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});

