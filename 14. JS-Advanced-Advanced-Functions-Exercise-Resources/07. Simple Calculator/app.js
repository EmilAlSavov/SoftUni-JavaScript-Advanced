function calculator() {

    let num1;
    let num2;
    let result;

    let calculate = {
        init: (tag1, tag2, tagResult)=>{
            num1 = document.querySelector(tag1);
            num2 = document.querySelector(tag2);
    
            result = document.querySelector(tagResult);},
        add: ()=>{result.value = Number(num1.value) + Number(num2.value)},
        subtract: ()=>{result.value = Number(num1.value) - Number(num2.value)}
    };

    return calculate;
}

const calculate = calculator();

calculate.init('#num1', '#num2', '#result');
