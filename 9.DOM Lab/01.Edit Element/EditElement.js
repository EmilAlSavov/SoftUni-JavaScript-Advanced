function editElement() {
    String.prototype.replaceAll = function (target, payload) {
        let regex = new RegExp(target, 'g')
        return this.valueOf().replace(regex, payload)
    };

    let text = String(reference.textContent);

    text = text.replaceAll(match, replacer);

    reference.textContent = text;
}