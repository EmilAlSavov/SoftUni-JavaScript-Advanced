function Between2El(arr, el1, el2){
    let index1 = arr.indexOf(el1);
    let index2 = arr.indexOf(el2);

    return arr.slice(index1, index2 + 1);
}