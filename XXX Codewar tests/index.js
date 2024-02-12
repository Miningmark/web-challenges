
function persistence(num) {
    if (num < 10) {
        // If num is already a single digit, return 0
        return 0;
    }

    let persistenceCount = 0;

    while (num >= 10) {
        num = calculate(num);
        persistenceCount++;
    }

    return persistenceCount;
}

//console.log(persistence(9999));

//----------------------------------------------------------------------------------------------------------------------------



function calculate(number){
    const digits = Array.from(String(number), Number);
    let num = 1;
    for(let i = 0; i < digits.length; i++){
        num *= digits[i]
    }
    return num
}



function pickPeaks(arr){
    var peaks = { pos: [], peaks: [] };
    var plateauStart = null;

    for (var i = 1; i <= arr.length - 1; i++) {
        console.log(i);
        if (arr[i] > arr[i - 1]) {
        plateauStart = i;
        } else if (arr[i] < arr[i - 1] && plateauStart !== null) {
        peaks.pos.push(plateauStart);
        peaks.peaks.push(arr[plateauStart]);
        plateauStart = null;
        }
    }

    return peaks;
}

//console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]));
//console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]));
//console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]));
//console.log(pickPeaks([2,1,3,1,2,2,2,2,1]));

//----------------------------------------------------------------------------------------------------------------------------



function humanReadable (seconds) {
    let temp = seconds % 3600;
    let hours = (seconds - temp) / 3600;
    seconds -= (hours * 3600); 
    temp = seconds % 60;
    let minutes = (seconds - temp) / 60;
    seconds -= (minutes * 60); 
    
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
  

//console.log(humanReadable(0));
//console.log(humanReadable(59));
//console.log(humanReadable(60));
//console.log(humanReadable(45296));

//----------------------------------------------------------------------------------------------------------------------------


// The p list is organized by price to foot by index, so the 
//   1-index element contains the price for 1 ft, 2 is for 2 ft, 
//   3 is 3 ft, etc...
// Note that the 0th element has a cost of $0
//         0    1    2    3    4    5    6    7... and so on
var p = [  0,   1,   5,   8,   9,  10,  17,  17,  20,  24, // 0X's
          30,  32,  35,  39,  43,  43,  45,  49,  50,  54, // 1X's
          57,  60,  65,  68,  70,  74,  80,  81,  84,  85, // 2X's
          87,  91,  95,  99, 101, 104, 107, 112, 115, 116, // 3X's
         119]; // 40th element

// Your new function as given to you by me, your boss.
var cutLog = function(p, n) {
    if (n == 0) return 0;
    let q = -1;
    for (let i = 1; i <= n; i++) {
        q = Math.max(q, p[i] + cutLog(p, n - i));
    }
    return q;
    // Some array to store calculated values
    for (j = 1; j <= n; j++) {
        for (i = 1; i <= j; i++) { // Two nested loops = Θ(n^2)
            // Magic
        }
    }
    return "solution"; // Good luck intern!
}

console.log(cutLog(p,1));
console.log(cutLog(p,5));
console.log(cutLog(p,8));
console.log(cutLog(p,10));
console.log(cutLog(p,22));
console.log(cutLog(p,35));