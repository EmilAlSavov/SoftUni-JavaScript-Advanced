function solve() {
    let sectionOpen = document.getElementsByTagName('section')[1];
    let divOpen = sectionOpen.getElementsByTagName('div')[1];
    divOpen.innerHTML = sessionStorage.getItem('open');

    let sectionProgress = document.getElementsByTagName('section')[2];
    let divProgress = sectionProgress.getElementsByTagName('div')[1];
    divProgress.innerHTML = sessionStorage.getItem('session');

    let task = document.getElementById('task').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;

    let buttonAdd = document.getElementById('add')
    let buttonStart = document.getElementById('start');
    let buttonDelete = document.getElementById('delete');

    buttonAdd.addEventListener('click', Add);
    buttonStart.addEventListener('click', Start)

    function Start(){
        divProgress.innerHTML += `<article> <h3>${task}</h3> <p>Description: ${description}</p> <p>Due Date: ${date}</p> <div class="flex"> <button id="deleteProgress" class="red">Delete</button> <button id="finish" class="orange">Finish</button></div></article>`;
        sessionStorage.setItem('session', divProgress.innerHTML);
        sessionStorage.removeItem('open');
    }

    function Add(){
        

        if(task === '' || description === '' || date === '') {
            return;
        }

        divOpen.innerHTML += `<article> <h3>${task}</h3> <p>Description: ${description}</p> <p>Due Date: ${date}</p> <div class="flex"> <button id="start" class="green">Start</button> <button id="delete" class="red">Delete</button></div></article>`;

        sessionStorage.setItem('open', divOpen.innerHTML);  
        
    }
}