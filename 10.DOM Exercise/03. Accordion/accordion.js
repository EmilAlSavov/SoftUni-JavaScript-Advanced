function toggle() {
    let extraText = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if(extraText.style.display === 'none'){

        button.textContent = 'Less';
        extraText.style.display = 'block';
    } else {

        button.textContent = 'More';
        extraText.style.display = 'none';
    }
}