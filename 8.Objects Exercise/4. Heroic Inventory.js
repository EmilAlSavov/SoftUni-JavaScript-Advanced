function storeHeroes(heroesArr){
    let resultArr = [];
    for (const heroesString of heroesArr) {
        heroArr = heroesString.split(" / ")

        resultArr.push({name: heroArr[0], level: Number(heroArr[1]), items: heroArr[2] ? heroArr[2].split(', ') : []})
    }

    return JSON.stringify(resultArr);
}