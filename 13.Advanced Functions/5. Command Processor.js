function commandCreator(){
    let string = "";
    return {
        append: function(str){string += str},
        removeStart: function(n){string = string.substring(n)},
        removeEnd: function(n){string = string.substring(0, string.length - n)},
        print: () => {console.log(string)}
    }
}