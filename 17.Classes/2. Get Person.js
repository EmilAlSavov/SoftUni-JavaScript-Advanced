function createArr(){
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

    let p1 = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
    let p2 = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
    let p3 = new Person('SoftUni');
    let p4 = new Person("Stephan", "Johnson", 25);
    let p5 = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
    return [p2, p3, p4, p5];
}