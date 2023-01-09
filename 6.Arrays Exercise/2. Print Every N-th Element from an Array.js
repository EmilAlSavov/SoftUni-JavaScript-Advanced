function PrintEveryNthEl(arr, n){
    let res = []

    for (let i = 0; i < arr.length; i += n) {
        const element = arr[i];

        res.push(element);
    }
    return res;
}