function createFormatter(separator, symbol, symbolFirst, currencyFormatter){
    return function innerFunc(value){
        return currencyFormatter(separator, symbol, symbolFirst, value);
    }
}