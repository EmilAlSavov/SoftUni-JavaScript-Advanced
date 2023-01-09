function TicTacToe(commandsArr){
let isWon = false;

    function Win(player){
        console.log(`Player ${player} wins!`);
        Print();
        isWon = true;
    }

    function Print(){
        for(var i = 0; i < matrix.length; i++) {
            let text = '';
            for(var z = 0; z < matrix[i].length; z++) {
              text += String(matrix[i][z] + "\t")
            }
            console.log(text.trimEnd())
        }
    }

    function EveryRow(playerSym){
        for (let rows = 0; rows < matrix.length; rows++) {
            const row = matrix[rows];
            
            if(row.every(el => el === playerSym)){
                Win(playerSym)
            }
        }
    }

    function Diagonals(printChar){
        let leftDiagonal = 0;
        let rightDiagonal = matrix[0].length - 1;

        for (let rows = 0; rows < matrix.length; rows++) {
            leftDiagonalArr.push(matrix[rows][leftDiagonal]);
            rightDiagonalArr.push(matrix[rows][rightDiagonal]);

            leftDiagonal++;
            rightDiagonal--;
        }

        if(leftDiagonalArr.every(el => el === printChar)){
            Win(printChar);
        }
        if(rightDiagonalArr.every(el => el === printChar)){
            Win(printChar);
        }
    }

    function EveryCol(printChar){


        for (let cols = 0; cols < 3; cols++) {
            
            let colArr = []
            for (let rows = 0; rows < matrix.length; rows++) {
                
                colArr.push(matrix[rows][cols])
            }
            if(colArr.every(el => el === printChar)){
                Win()
            }
        }
    }

    let matrix = [[false, false, false],

    [false, false, false],
    
    [false, false, false]];

    let beAgain = false;
    let printChar = '';

    for (let i = 0; i < commandsArr.length; i++) {
        if (isWon) {
            return;
        }
        const command = commandsArr[i];
        
        let rows = Number(command.split(' ')[0]);
        let cols = Number(command.split(' ')[1]);
        let element = matrix[rows][cols]
                
                if (printChar === 'O' || printChar === '') {
                    if(!beAgain){
                    printChar = 'X';
                    }
                } else if (printChar === 'X') {
                    
                    if(!beAgain){
                        printChar = 'O';
                        }
                }
        beAgain = false;
        if (element !== false) {
            console.log("This place is already taken. Please choose another!");
            beAgain = true;
            continue;
        }

        matrix[rows][cols] = printChar;
        element = printChar;

        var leftDiagonalArr = [];
        var rightDiagonalArr = [];

        Diagonals(printChar);
        EveryRow(printChar);
        EveryCol(printChar);

        

        
        if(matrix.every(el => el.every(e => e !== false))){
            console.log("The game ended! Nobody wins :(");
            Print();
            break;
        }
        
    }
}