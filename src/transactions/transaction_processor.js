// changed var to const
//let txr = [];

function processTransactions(transActions) {

    let txr = [];

    if(!validateTransactions(transActions)) {
        throw new Error("Undefined collection of transactions")
    }

    // ? why we using an ojbect whnen 
    //let txCount = {};

    //const numberOfTransactions = transActions.length;

    let txCount = {};
    transActions.forEach((transaction) => {
        txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
        });

    // for(var i = 0; i < numberOfTransactions; i++) {
    //     const transaction = transActions[i];
    //     txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    // }

    // const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
    

     

    txCount = sortByAmountThenName(txCount);
    
    // Place them back in array for returning
    Object.keys(txCount).forEach(function (key, index) {
        txr[index] = `${key} ${txCount[key]}`;
    });

    return txr;
}

function sortByAmountThenName(txCount) {
    let sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
        return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
    );

    let sortedResults = {};
    for(let objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
    }

    return sortedResults;
}

const validateTransactions = (transactions) => !(transactions === undefined);

module.exports = processTransactions;