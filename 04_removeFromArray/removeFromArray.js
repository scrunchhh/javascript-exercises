const removeFromArray = function(arr, r, r2, r3 ,r4) {
    let newList = []
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === r || arr[i] === r2 || arr[i] === r3 || arr[i] === r4 ) {
            
        } else {
            newList.push(arr[i]) 
        }
    }
    return newList
};

// Do not edit below this line
module.exports = removeFromArray;
