import {getRandomColor} from "./utils/randomColor.js";
import Circle from "./utils/circle.js";
import Square from "./utils/square.js";
import Pentagon from "./utils/Pentagon.js";

console.clear();

const root = document.getElementById("root");

const circle = new Circle();
const square = new Square();
const pentagon = new Pentagon();





root.append(circle, square, pentagon);
