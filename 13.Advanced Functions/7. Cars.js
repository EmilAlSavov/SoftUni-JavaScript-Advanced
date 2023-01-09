function cars(input){

    let cars = [];
    let carGenerator = {
        create: (name) => cars.push({name}),
        inherits: (name, parentName) => cars.push(cars[cars.findIndex(c => c.name === name)]),
        set: (name, key, value) => cars.find(c => c.name === name)[key] = value,
        print: (name) => console.log(cars.find(c => c.name === name))
    }


    carGenerator.create('emo');
    carGenerator.inherits('hrisi', 'emo');
    carGenerator.set('emo', 'vunshenVid', 'hubav');
    carGenerator.set('hrisi', 'inteligence', 'umna')
    carGenerator.print('emo');
    carGenerator.print('hrisi')
}

cars('dsadad');