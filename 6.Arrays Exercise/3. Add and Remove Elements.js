function AddsAndRemoves(commandArr){
    let res = [];
    let counter = 0;
    for (const command of commandArr) {
        if (command === "add") {
            
            if(res.length === 0){
                counter++;
                res[0] = counter;
                continue;
            }
            counter++;
            res.push(counter)
        } else if (command === "remove") {
            counter++;
            res.pop();
        }
    }

    if(res.length === 0){
        console.log("Empty")
    } else{
        res.forEach(element => {
           console.log(element);
        });
    }
}