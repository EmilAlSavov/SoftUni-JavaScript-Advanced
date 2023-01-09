function NegativeOrPosNum(arr){
    let res = [];

    arr.forEach(element => {
        if (element < 0) {
            res.unshift(element)
        } else {
            res.push(element)
        }
    });

    return res;
}