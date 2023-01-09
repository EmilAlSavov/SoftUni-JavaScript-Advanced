function extractText() {
    let listItems = document.querySelectorAll('ul li')

    let textArea = document.getElementsByTagName('textarea')[0];

    for (const listItem of listItems) {
        textArea.value += listItem.textContent + '\n';
    }
}