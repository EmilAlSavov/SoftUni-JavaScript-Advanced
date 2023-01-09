function SortText(arr){
    arr.sort(function(a, b) { return a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase())})

    for (const el of arr) {
        
        console.log(el)
    }
}