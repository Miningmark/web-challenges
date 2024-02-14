
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
/*
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
*/
function cutLog(p, n) {
    const memo = Array.from({ length: n + 1 }, () => -1);
    console.log(memo);

    function helper(n) {
      if (n === 0) return 0;
      if (memo[n] !== -1) return memo[n];
  
      let q = -1;
      for (let i = 1; i <= n; i++) {
        q = Math.max(q, p[i] + helper(n - i));
        console.log("Durchlauf: " + i + " " + q);
      }
  
      memo[n] = q;
      return q;
    }
  
    return helper(n);
  }

//console.log(cutLog(p,1));
//console.log(cutLog(p,5));
//console.log(cutLog(p,8));
//console.log(cutLog(p,10));
//console.log(cutLog(p,22));
//console.log(cutLog(p,40));




function rgbToHex(r, g, b) {
    if(r < 0 || g < 0 || b < 0){
        return "000000"
    }
    const hexR = toHex(r);
    const hexG = toHex(g);
    const hexB = toHex(b);
  
    return `${hexR}${hexG}${hexB}`;
}

function toHex(num){
    let temp = num.toString(16);
    if(temp.length == 1){
        temp = "0" + temp;
    }
    return temp;
}

//console.log(rgbToHex(0,0,0));
//console.log(rgbToHex(0,0,-20));
//console.log(rgbToHex(255,255,255));





function cakes(recipe, available){
    const recipeKeys = Object.keys(recipe);
    const availableKeys = Object.keys(available);
    let max = -1;

    for (const key of recipeKeys) {
        if (availableKeys.includes(key)) {
            let temp = Math.floor(available[key] / recipe[key]);
            if (temp < max || max === -1) {
                max = temp;
            }
        } else {
            return 0;
        }
    }

/*
    for(let i = 0; i < recipeKeys.length; i++){
        if(availableKeys.includes(recipeKeys[i])){
            let temp = Math.floor(available[recipeKeys[i]] / recipe[recipeKeys[i]]);
            if(temp < max || max == -1){
                max = temp;
            }
        }else{
            return 0;
        }
    }
*/
    return max;
}

//console.log(cakes({flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
//console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},{sugar: 500, flour: 2000, milk: 2000}));




function isSolved(board){
    for(let i = 0; i < 3; i++){
        if((board[i][0] === board[i][1] && board[i][1] === board[i][2]) || (board[0][i] === board[1][i] && board[1][i] === board[2][i])){
            if(board[i][i] === 1 || board[i][i] === 2){
                return board[i][i];
            }
        }
    }
    if (
        (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
        (board[0][2] === board[1][1] && board[1][1] === board[2][0])
    ) {
        if(board[1][1] === 1 || board[1][1] === 2){
            return board[1][1];
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == 0) {
                return -1;
            }
        }
    }
    return 0;
}

//console.log(isSolved([  [0,1,1],[2,0,2],[2,1,0]]));


function rot13(message){
    let input = message.split("");
    let output = "";

    input.forEach(letter => {
        if(letter >= 'a' && letter <= 'z' || letter >= 'A' && letter <= 'Z'){    
            //let letterOut = String.fromCharCode(letter.charCodeAt(0) + 13);
            let shift;
            if(letter.charCodeAt(0) <= 'Z'.charCodeAt(0)){
                shift = 'A'.charCodeAt(0);
            }else{
                shift = 'a'.charCodeAt(0);
            }
            let letterOut = String.fromCharCode((letter.charCodeAt(0) - shift + 13) % 26 + shift);
            output += letterOut;
        }else{
            output += letter;
        }
    });
    return output;
}


//console.log(rot13("abcde12 34 zZ4"));


