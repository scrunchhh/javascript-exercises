const repeatString = function(a, b) {
    let o = ''
    if (b < 0) {
        o = "ERROR"
        return o
    }
    else {
        for (i = 1; i <= b; i++) {
            o += a
        }
        return o 
    }
    
};

// Do not edit below this line
module.exports = repeatString;
