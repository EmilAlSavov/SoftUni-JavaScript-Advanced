function RotateArray(arr, numOfRotations){

    for (let i = 0; i < numOfRotations; i++) {
        
        let lastEl = arr.pop();

        arr.unshift(lastEl);

    }
    console.log(arr.join(' '))
}