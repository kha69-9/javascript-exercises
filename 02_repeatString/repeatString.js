const repeatString = function(string, repeatations) {
    if (repeatations < 0) return 'ERROR'
    let stringHolderArray = [];
    for (let i=0; i < repeatations; i++) {
        stringHolderArray.push(string);
    }
    return stringHolderArray.join('');
};

// Do not edit below this line
module.exports = repeatString;
