//NOT READYYYYYYYYYYYYY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class Hex{
    constructor(number){
        this.number = number;
    }

    valueOF(){
        return this.number; 
    }

    toString(){
        return '0x' + this.number.toString(16)
    }

    plus(obj){
        if(typeof(pbj) === 'Hex'){
            return new Hex(this.number + obj.number)
        }
        return new Hex(this.number + obj);
    }

    minus(obj){
        if(typeof(pbj) === 'Hex'){
            return new Hex(this.number - obj.number)
        }
        return new Hex(this.number - obj);
    }

    parse(hex){
        return parseInt(hex, 16);
    }
}

let FF = new Hex(255);

console.log(FF.toString());

FF.valueOf() + 1 == 256;

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');

console.log(FF.parse('AAA'));