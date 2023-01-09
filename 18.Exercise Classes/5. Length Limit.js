class Stringer{
    constructor(innerString, innerLength){
        this._innerString = innerString;
        this.innerLength = innerLength;
    }

    get innerLength(){
        return this._innerLength;
    }

    set innerLength(value){
        if(value < 0){
            value = 0;
        }
        this._innerLength = value;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        this.innerLength -= length;
    }

    toString(){
        let fakeString = this._innerString;
        if (this.innerLength < this._innerString.length) {

            fakeString = this._innerString.substring(0, this.innerLength);
            fakeString += '...';
        }
 f
        return fakeString;
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test