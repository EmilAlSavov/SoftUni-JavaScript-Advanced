function filter(data, criteria){
    let employees = JSON.parse(data);

    let counter = 0;
    for (const employer of employees) {
        if (criteria === 'all') {
            console.log(`${counter++}. ${employer.first_name} ${employer.last_name} - ${employer.email}`)
            continue;
        }

        let criteriaType = criteria.split('-')[0];
        let criteriaValue = criteria.split('-')[1];

        if(employer[criteriaType] === criteriaValue){
            console.log(`${counter++}. ${employer.first_name} ${employer.last_name} - ${employer.email}`)
        }
    }
}