function SumFirstAndLast(arr){
    arr = arr.map(Number)
    return arr.shift() + arr.pop();
}