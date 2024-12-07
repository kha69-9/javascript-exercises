const removeFromArray = function(array, strings) {
    let newArray = [];
    let argArray = Array.from(arguments);
    argArray = argArray.slice(1);
    result = array.filter((item) => !argArray.includes(item))
    return result;
}

// Do not edit below this line
module.exports = removeFromArray;
