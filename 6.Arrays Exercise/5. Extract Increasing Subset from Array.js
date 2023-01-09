function ExtractIncreasingBiggestNum(arr){
    let finalArr = [arr[0]];

    let biggest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] >= biggest) {
            finalArr.push(arr[i]);
            biggest = arr[i];
        }
    }
    return finalArr;
}