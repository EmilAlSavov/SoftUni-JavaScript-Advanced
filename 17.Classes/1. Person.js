class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        console.log(`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`)
    }
}
