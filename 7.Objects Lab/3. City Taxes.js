function CityTaxes(name, population, treasury){
    let object = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: collectTaxes,
        applyGrowth: function(percentage) {
            Math.floor(
                this.population += (percentage / 100) * this.population)
            },
        applyRecession: function(percentage) {Math.floor(this.treasury -= (percentage / 100) * this.treasury)}

    }

    function collectTaxes(){

        Math.floor(this.treasury += population * this.taxRate)
    }

    return object;
}