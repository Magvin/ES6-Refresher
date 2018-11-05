function pairs(data,target){ // setting function for array and target value
var found = {}; //setting  to do compare
var results = []; //setting to store results
for(var i in data) { // looping array
    if (found[target - i] === true) {  
        // pair found
        results.push({
            a: parseInt(i),
            b: target - i
        });
    }

    found[i] = true;
}
return results;
}
