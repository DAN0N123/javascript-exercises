const removeFromArray = function(array, ...args) {
    args.forEach((argument) => {if (array.includes(argument)){
        array.splice(array.indexOf(argument), 1)
    }})
    return array
};


// Do not edit below this line
module.exports = removeFromArray;
