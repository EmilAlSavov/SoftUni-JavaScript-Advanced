class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired){
        if(spaceRequired > this.spaceAvailable){
            throw new Error('"Not enough space in the garden.');
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })

        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity){
        let plant = this.plants.find(p => p.plantName === plantName);

        if(plant === undefined){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(plant.ripe === true){
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if(quantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if(quantity === 1){
            return `${quantity} ${plantName} has successfully ripened.`
        } else if(quantity > 1){
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName){
        let plant = this.plants.find(p => p.plantName === plantName);

        if(plant === undefined){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if(plant.ripe === false){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.spaceAvailable += plant.spaceRequired;
        let index = this.plants.indexOf(plant);
        this.plants.splice(index, 1);

        this.storage.push({plantName: plant.plantName, quantity: plant.quantity});

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport(){
        let result = `The garden has ${this.spaceAvailable} free space left.`;
        
        result += `\nPlants in the garden: `
        this.plants.sort((a,b) => {if(a.plantName < b.plantName){return - 1}else if(a.plantName > b.plantName){return 1}else{return 0;}})
        
        for (const plant of this.plants) {
            result += `${plant.plantName}, `
        }

        result = result.substring(0, result.length - 2);

        if(this.storage.length === 0){
            result += `\nPlant in storage: The storage is empty.`
        } else{
            result += '\nPlants in storage: ';

            for (const plant of this.storage) {
                result += `${plant.plantName} (${plant.quantity}), `;
            }
            result = result.substring(0, result.length - 2);
        }

        return result;
        
    }
}