

const compareTriplets = (a, b) => {
    let result = [];
    let contA = 0;
    let contB = 0;

    for (i=0; i<a.length; i++) {
        if (a[i] > b[i]) {
            contA++ 
        } else if ( a[i] < b[i]) {
            contB++
        } 
    }

    result[0] = contA;
    result[1] = contB;

    return result

};

console.log(compareTriplets([1, 2, 3], [1, 5, 6]))