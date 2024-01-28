const reverseString = function(string) {
    let result = [];
    for (let i = 0; i< string.length ; i++){
        result.unshift(string[i])
    }
    return result.join('')
};

// Do not edit below this line
module.exports = reverseString;
