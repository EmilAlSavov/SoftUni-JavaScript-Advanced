function FindBiggest(arr){
    let newArr = [];

    for (const rows of arr) {
        for (const cols of rows) {
            newArr.push(cols)
        }
    }

    return Math.max(...newArr)
}