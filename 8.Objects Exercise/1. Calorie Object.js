function Calorie(inputArr){
    let result = {};
    for (let i = 0; i < inputArr.length; i++) {
        const el = inputArr[i];
        
        if (i % 2 == 0) {
            result[el] = 0
        } else {
            result[inputArr[i - 1]] = Number(el);
        }
    }
    console.log(result);
}