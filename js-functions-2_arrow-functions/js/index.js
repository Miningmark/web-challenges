console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}

function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}

function cleanInput(string) {
  return string.toLowerCase().trim();
}

const getCurrentHourShort = () => {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour === 0) return "12am";
  if (currentHour === 12) return "12pm";
  if (currentHour <= 11) return `${currentHour}am`;

  return `${currentHour - 12}pm`;
}

const getVectorLengthShort = (x,y,z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

const cleanInpurShort = string => string.toLowerCase().trim();

console.log(getCurrentHourShort());
console.log(getVectorLengthShort(2,2,2));
console.log(cleanInpurShort("MArkus"));

/*
Rewrite the following arrow functions as classic functions.
*/

const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};

const add3 = (a, b, c) => a + b + c;

const repeat10 = (string) => string.repeat(10);

function isOddAndSmallClassic(number){
  if (number > 10) {
    return false;
  }
  if (number % 2 === 0) {
    return false;
  }
  return true;
}

function add3Classic(a,b,c){
  return a + b + c;
}

function repeat10Classic(string){
  return string.repeat(10);
}

console.log(isOddAndSmallClassic(6));
console.log(add3Classic(5,2,3));
console.log(repeat10Classic("Hallo "));
