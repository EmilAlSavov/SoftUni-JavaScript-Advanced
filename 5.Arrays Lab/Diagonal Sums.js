function DiagonalSums(matrix){
    let leftDiagonal = 0;
    let rightDiagonal = matrix[0].length - 1;

    let sumLeftDiag = 0;
    let sumRightDiag = 0;

    for (let rows = 0; rows < matrix.length; rows++) {
        sumLeftDiag += matrix[rows][leftDiagonal];
        sumRightDiag += matrix[rows][rightDiagonal];

        leftDiagonal++;
        rightDiagonal--;
    }

    console.log(sumLeftDiag + " " + sumRightDiag);
}