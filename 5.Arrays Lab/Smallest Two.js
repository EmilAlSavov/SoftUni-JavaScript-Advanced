function Smallest2Nums(arr){
    return arr.sort((a, b) => a - b).slice(0, 2).join(' ');
}