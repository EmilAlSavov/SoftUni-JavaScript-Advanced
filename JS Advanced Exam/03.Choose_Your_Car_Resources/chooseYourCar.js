const { assert, expect } = require("chai");

const chooseYourCar = {
    choosingType(type, color, year) {
        if (year < 1900 || year > 2022) {
            throw new Error(`Invalid Year!`);
        } else {
            if (type == "Sedan") {

                if (year >= 2010) {
                    return `This ${color} ${type} meets the requirements, that you have.`;
                } else {
                    return `This ${type} is too old for you, especially with that ${color} color.`;
                }
            }
            throw new Error(`This type of car is not what you are looking for.`);
        }
    },

    brandName(brands, brandIndex) {

        let result = [];

        if (!Array.isArray(brands) || !Number.isInteger(brandIndex) || brandIndex < 0 || brandIndex >= brands.length) {
            throw new Error("Invalid Information!");
        }
        for (let i = 0; i < brands.length; i++) {
            if (i !== brandIndex) {
                result.push(brands[i]);
            }
        }
        return result.join(", ");
    },

    carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {

        let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);

        if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
            typeof consumptedFuelInLiters !== "number" || consumptedFuelInLiters <= 0) {
            throw new Error("Invalid Information!");
        } else if (litersPerHundredKm <= 7) {
            return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
        } else {
            return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
        }
    }
}

describe("Tests …", function() {
    describe("choosingType", function() {
        it("YearLessThan1900ShouldThrowError", function() {
            let type = 'test type';
            let color = 'test color';
            let year = 1800;

            let result = () => chooseYourCar.choosingType(type, color, year);

            assert.throws(result, 'Invalid Year!')
        });

        it("YearHigherThan2022ShouldThrowError", function() {
            let type = 'test type';
            let color = 'test color';
            let year = 2023;

            let result = () => chooseYourCar.choosingType(type, color, year);

            assert.throws(result, 'Invalid Year!')
        });

        it("ShouldThrowErrorIfTypeIsDifferentThanSedan", function() {
            let type = 'test type';
            let color = 'test color';
            let year = 2000;

            let result = () => chooseYourCar.choosingType(type, color, year);

            assert.throws(result, 'This type of car is not what you are looking for.')
        });

        it("ShouldReturnCorrectIfYearAndTypeAreCorrect", function(){
            let type = 'Sedan';
            let color = 'test color';
            let year = 2010;

            let result = chooseYourCar.choosingType(type, color, year);

            expect(result).to.be.equal(`This ${color} ${type} meets the requirements, that you have.`)

        })

        it("ShouldReturnCorrectIfYearIsTooOldAndTypeIsCorrect", function(){
            let type = 'Sedan';
            let color = 'test color';
            let year = 2009;

            let result = chooseYourCar.choosingType(type, color, year);

            expect(result).to.be.equal(`This ${type} is too old for you, especially with that ${color} color.`)

        })
     });
     
     describe("brandName", function() {
        it('ifTheArrayISInvalidThrowsError', function(){
            let arr = 125;
            let index = 5;

            let result = () =>chooseYourCar.brandName(arr, index);

            assert.throws(result, "Invalid Information!");
        })

        it('ifTheIndexIsInvalidTypeThrowsError', function(){
            let arr = ['name1', 'name2'];
            let index = 'string';

            let result = () =>chooseYourCar.brandName(arr, index);

            assert.throws(result, "Invalid Information!");
        })

        it('ifTheIndexIsFloatThrowsError', function(){
            let arr = ['name1', 'name2'];
            let index = 1.5;

            let result = () =>chooseYourCar.brandName(arr, index);

            assert.throws(result, "Invalid Information!");
        })

        it('ifTheIndexIsUnderZeroThrowsError', function(){
            let arr = ['name1', 'name2'];
            let index = -1;

            let result = () =>chooseYourCar.brandName(arr, index);

            assert.throws(result, "Invalid Information!");
        })

        it('ifTheIndexIsBiggerOrTheSameAsTheArrayLengthThrowsError', function(){
            let arr = ['name1', 'name2'];
            let index = 2;

            let result = () =>chooseYourCar.brandName(arr, index);

            assert.throws(result, "Invalid Information!");
        })

        it('ShouldReturnCorrectOutput', function(){
            let arr = ['name1', 'name2', 'name3'];
            let index = 1;

            let result = chooseYourCar.brandName(arr, index);

            expect(result).to.be.equal('name1, name3')
        })
     })

     describe("CarFuelConsumption", function(){
        it("shouldThrowErrorIfDistanceInKilIsNotANumber", function(){
            let distance = "string";
            let consumption = 10;

            let result = () => chooseYourCar.carFuelConsumption(distance, consumption);

            assert.throws(result, "Invalid Information!");
        })

        it("shouldThrowErrorIfDistanceInKilIsBellowZero", function(){
            let distance = -1;
            let consumption = 10;

            let result = () => chooseYourCar.carFuelConsumption(distance, consumption);

            assert.throws(result, "Invalid Information!");
        })

        it("shouldThrowErrorIfConsumbtionNotANumber", function(){
            let distance = 10;
            let consumption = 'string';

            let result = () => chooseYourCar.carFuelConsumption(distance, consumption);

            assert.throws(result, "Invalid Information!");
        })

        it("shouldThrowErrorIfConsumbtionIsBelowZero", function(){
            let distance = 10;
            let consumption = -1;

            let result = () => chooseYourCar.carFuelConsumption(distance, consumption);

            assert.throws(result, "Invalid Information!");
        })

        it("shouldReturnCorrectStringForLowConsumption", function(){
            let distance = 10;
            let consumption = 0.1;
            let litersPerHour = ((consumption / distance)* 100).toFixed(2);

            let result = chooseYourCar.carFuelConsumption(distance, consumption);

            expect(result).to.be.equal( `The car is efficient enough, it burns ${litersPerHour} liters/100 km.`)
        })

        it("shouldReturnCorrectStringForHighConsumption", function(){
            let distance = 10;
            let consumption = 1;
            let litersPerHour = ((consumption / distance)* 100).toFixed(2);

            let result = chooseYourCar.carFuelConsumption(distance, consumption);

            expect(result).to.be.equal( `The car burns too much fuel - ${litersPerHour} liters!`)
        })

        it("ResultShouldBeFormattet", function(){
            let distance = 10;
            let consumption = 1;
            
            let litersPerHour = ((consumption / distance)* 100).toFixed(2);

            expect(litersPerHour).to.be.toFixed(2);
        })
     })
});
