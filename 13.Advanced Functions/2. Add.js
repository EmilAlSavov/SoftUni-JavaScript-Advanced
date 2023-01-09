function Add(startNum){

    return function (increaseNum) {let num = startNum; return num += increaseNum }
}