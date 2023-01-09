function Factory(libraryFunc, objectArr){

    let result = [];

    for (const object of objectArr) {
        console.log(object);
        object.name = object.template.name;
        delete object.template;
        for (let i = 0; i < object.parts.length; i++) {

            object[object.parts[i]] = libraryFunc[object.parts[i]];
        }
        delete object.parts;

        result.push(object)

    }
    return result;
}