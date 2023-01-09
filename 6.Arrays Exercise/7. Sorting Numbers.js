function SortingNums(arr){
    let finalArr = [];
    
    while (arr.length !== 0) {
        let indexSmallest = arr.indexOf(Math.min(...arr));
        let indexBiggest = arr.indexOf(Math.max(...arr));

        let minEl = arr[indexSmallest];
        let maxEl = arr[indexBiggest];

        finalArr.push(minEl);
        if(indexBiggest !== indexSmallest){
            
            finalArr.push(maxEl);
        }

        arr.splice(indexSmallest, 1);
        if (indexSmallest < indexBiggest) {
            
            arr.splice(indexBiggest - 1, 1);
        }else if(indexSmallest > indexBiggest){

            arr.splice(indexBiggest, 1);
        }

    }

    return finalArr;
}