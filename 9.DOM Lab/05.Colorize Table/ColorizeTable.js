function colorize() {
    let elements = document.querySelectorAll('table tr')

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        
        if(i % 2 !== 0){
            elements[i].style.backgroundColor = 'Teal';
        }
    }
}