const sumAll = function(start, stop) {
    let num = 0
    if (typeof(start) != 'number' || typeof(stop) != 'number' || start < 0 || stop < 0) {
        return "ERROR"
    } else if (stop < start) {
        for (let i = stop; i <= start; i++) {
            num += i 
        }
    } else {
        for (let i = start; i <= stop; i++) {
            num += i 
        }
    }
    return num
};

// Do not edit below this line
module.exports = sumAll;
