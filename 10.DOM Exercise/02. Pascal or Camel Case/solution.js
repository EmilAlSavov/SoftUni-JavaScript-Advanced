function solve() {
  let text = document.getElementById('text').value;
  let camelOrPascal = document.getElementById('naming-convention').value;

  String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
  if (camelOrPascal === 'Camel Case') {
    text = text.toLowerCase().split(' ');

    for (let i = 1; i < text.length; i++) {
      const element = text[i];
  
      text[i] = text[i].replaceAt(0, text[i][0].toUpperCase())
    }

    text = text.join('');
    document.getElementById('result').innerText = text;
  } else if (camelOrPascal === 'Pascal Case') {
    text = text.toLowerCase().split(' ');

    for (let i = 0; i < text.length; i++) {
      const element = text[i];
  
      text[i] = text[i].replaceAt(0, text[i][0].toUpperCase())
    }

    text = text.join('');
    document.getElementById('result').innerText = text;
  } else {
    document.getElementById('result').innerText = 'Error!';
  }
}