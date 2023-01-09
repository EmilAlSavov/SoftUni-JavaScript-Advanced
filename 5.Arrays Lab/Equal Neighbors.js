function EqualNeighbors(matrix){


    let sum = 0;

    for (let rows = 0; rows < matrix.length; rows++) {
        
        for (let cols = 0; cols < matrix[rows].length; cols++) {
            let hadPaired = false;

            let el = matrix[rows][cols];

            if(matrix[rows - 1] !== undefined){

                let upEl = matrix[rows - 1][cols];
                if (el === upEl) {
                    sum ++;
                    hadPaired = true;
                }
            }
            if (matrix[rows][cols - 1] !== undefined) {
                
                let leftEl = matrix[rows][cols - 1];
                if (el === leftEl) {
                    sum ++;
                    hadPaired = true;
                }
            }

            if (matrix[rows][cols + 1] !== undefined) {
                
                let rightEl = matrix[rows][cols + 1];
                if (el === rightEl) {
                    sum ++;
                    hadPaired = true;
                }
            }
            if (matrix[rows + 1] !== undefined) {
                
                let botEl = matrix[rows + 1][cols];
                if (el === botEl) {
                    sum ++;
                    hadPaired = true;
                }
            }
            
            if (hadPaired) {
                matrix[rows][cols] = null;
            }
        }
        
    }
    return sum;

}