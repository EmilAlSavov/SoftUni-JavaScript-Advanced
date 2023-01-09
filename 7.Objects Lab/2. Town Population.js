function TownPopulation(arr){
    let obj = arr.map(el => {let splittetCom = el.split(" <-> ")

        return {

            name: splittetCom[0],
            population: Number(splittetCom[1])
        }
    }).reduce((result, currentObj) => {
        if (result[currentObj.name] === undefined) {
            result[currentObj.name] = currentObj.population;
        } else{
            result[currentObj.name] += currentObj.population;
        }

        return result;
    }, {})

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const population = obj[key];
            
            console.log(`${key} : ${population}`)
        }
    }
}