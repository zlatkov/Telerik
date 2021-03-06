﻿function printNumbers() {
    var n = document.getElementById("integer-input").value;
    if (isValidInteger(n)) {
        n = parseInt(n, 10);
        var i;

        for (i = 1; i <= n; ++i) {
            if (i % 3 !== 0 && i % 7 !== 0) {
                console.log(i);
            }
        }
    }
    else {
        console.log("Invalid input.");
    }
}


function isValidInteger(number) {
    if (isFinite(number) && parseFloat(number) === parseInt(number, 10)) {
        return true;
    }
    else {
        return false;
    }
}