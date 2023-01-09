class List{
    #arr;
    constructor(){
        this.#arr = [];
    }

    add(num){
        this.#arr.push(num)
        this.#arr.sort((a,b) => a-b);
    }

    remove(index){
        if (index > -1 && index < this.#arr.length) { // only splice array when item is found
            this.#arr.splice(index, 1); // 2nd parameter means remove one item only
          }
    }

    get(index){
        return this.#arr[index];
    }

    get size(){
        return this.#arr.length;
    }
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));
console.log(list.size);

list.remove(1); console.log(list.get(1));