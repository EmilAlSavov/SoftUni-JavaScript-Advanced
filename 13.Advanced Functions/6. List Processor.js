function listCreator(input){
    let result = [];
    function processorCreator(){
        return {
            add: function(str){result.push(str)},
            remove: function(str){result = result.filter(item => item !== str)},
            print: () => {console.log(result.join(','))}
        }
    }

    let processor = processorCreator();

    for (const command of input) {
        if(command === 'print'){
            console.log(result.join(','));
            continue;
        }
        let type = command.split(' ')[0];
        let value = command.split(' ')[1];

        processor[type](value)
    }
}