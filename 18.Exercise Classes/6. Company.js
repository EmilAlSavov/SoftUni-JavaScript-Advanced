class Company{

    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        if(!name){
            throw new Error('Invalid input!');
        }
        if(salary < 0){
            throw new Error('Invalid input!');
        }
        if(this.departments[department] === undefined){
            this.departments[department] = [];
        }
        this.departments[department].push({name, salary, position});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let scores = [];
        let name = '';
        let highestScore = 0;

        for (const department in this.departments) {
            let averageNum = 0;
            let devider = 0;
            for (let i = 0; i < this.departments[department].length; i++) {
                const element = this.departments[department][i];
                
                averageNum += element.salary;
                devider = i+1;
            }
            let score = averageNum / devider;
            scores.push(score);

            if(score >= Math.max(scores)){
                name = department;
                highestScore = score;
            }
        }

        let result = `Best Department is: ${name}\n`;
        result += `Average salary: ${highestScore.toFixed(2)}`;
        
        this.departments[name] = this.departments[name].sort((a, b) => {
            if(a.salary > b.salary){
               return -1;
            }else if(a.salary < b.salary){
               return 1;
            }else{
                if (a.name < b.name) {
                    return -1;
                } else if(a.name > b.name){
                    return 1;
                } else{
                    return 0;
                }
            }
         });
        for (const employee of this.departments[name]) {
            result += `\n${employee.name} ${employee.salary} ${employee.position}`;
        }

        return result;
    }
};

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let act = c.bestDepartment();

console.log(act);