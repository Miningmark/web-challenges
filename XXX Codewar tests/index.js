
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