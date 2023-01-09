function fromJSONToHTMLTable(input){

    let objects = JSON.parse(input);
    let result = "<table>\n";

    result += "<tr>";

        let highestLength = 0;
        let highestItem = 0;
        for (let i = 0; i < objects.length; i++) {
        let objLength = Object.keys(objects[i]).length;
        if (objLength > highestLength) {
            highestLength = objLength;
            highestItem = i;
        }
    }

    for (const key in objects[highestItem]){
        if (Object.hasOwnProperty.call(objects[highestItem], key)) {
            
            result += `<th>${key}</th>`;
        }
    }
    result += '</tr>\n';

    for (const object of objects) {
        let keys = Object.keys(object);

        result += '<tr>';

        for (const key of keys) {
            result += `<td>${object[key].toString().replace('<', '&lt;').replace('>', "&gt;")}</td>`
        }
        result += '</tr>\n';
        // result += `<tr><td>${name}</td><td>${score}</td></tr>\n`;
    }
    result += "</table>";

    return result;

}

window.onload = function(){

let container = document.getElementById('wrapper');

container.innerHTML =

fromJSONToHTMLTable('[{"Name":"</div>","Score":4},{"Name":"Gosho","Score":5},{"Name":"Angel","Score":5.5,"Grade":"10"}]');

};
