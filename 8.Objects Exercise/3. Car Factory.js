function CreateACar(stockCar){

    let model = stockCar.model;
    let power = stockCar.power;
    let color = stockCar.color;
    let carriage = stockCar.carriage;
    let wheelsize = stockCar.wheelsize;

    let engine = {}

    if (power <= 90) {
        engine = { power: 90, volume: 1800 };
    } else if (power <= 120) {
        engine = { power: 120, volume: 2400 };
    } else {
        engine = { power: 200, volume: 3500 };
    }

    if (carriage === 'hatchback') {
        carriage = {type: 'hatchback', color}
    } else if (carriage === 'coupe') {
        carriage = {type: 'coupe', color}
    }

    if (wheelsize % 2 == 0) {
        wheelsize--;
    }

    wheelsize = [wheelsize, wheelsize, wheelsize, wheelsize];

    let tunedCar = {
        model, 
        engine,
        carriage,
        wheels: wheelsize
    }

    return tunedCar;
}