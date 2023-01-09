function MagicMatrices(matrix){

    let result = false;
    const rowsSums = [];


    for (let rows = 0; rows < matrix.length; rows++) {
        const currRow = matrix[rows];
        
        rowsSums.push(currRow.reduce((sum, a) => sum + a));
    }
    
     let colsSums = matrix.reduce(function (r, a) {
        a.forEach(function (b, i) {
            r[i] = (r[i] || 0) + b;
        });
        return r;
    }, []);

    let sums = colsSums.concat(rowsSums)
    if (sums.every( (val, i, arr) => val === arr[0] )) {
        result = true
    }

    console.log(result)
}