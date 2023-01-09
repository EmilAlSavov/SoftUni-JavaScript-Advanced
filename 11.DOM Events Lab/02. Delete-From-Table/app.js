function deleteByEmail() {
    let li = document.querySelectorAll('#customers tbody td:nth-child(2)');
    let input = document.getElementsByName('email')[0];
    let result = document.getElementById('result');
    let match = false;
    for (const item of li) {

        if (item.innerText === input.value) {
            item.parentElement.remove();
            match = true;
        }
    }
    
    if (match) {
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }

    input.value = '';
}