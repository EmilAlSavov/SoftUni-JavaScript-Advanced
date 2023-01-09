function GenerateArr(arrLength, sumLength){
    let arr = [1];
    
    for (let i = 0; i < arrLength - 1; i++) {
        const element = arr[i];
        let sum = 0;
        
        let counter = i;
        for (let k = 0; k < sumLength; k++) {
            if (counter < 0) {
                break;
            }
            sum += arr[counter]
            counter --
        }
        arr.push(sum)
        
    }
    return arr;
}