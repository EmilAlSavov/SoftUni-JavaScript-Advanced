function sumTable() {
    let table = document.querySelectorAll('table tbody tr')

    console.log(table);


    let sum = 0;
    for (let i = 1; i < table.length - 1; i++) {
        const el = table[i];
        
        sum += Number(table[i].children[1].textContent);
    }

    document.getElementById('sum').innerText = sum;
}