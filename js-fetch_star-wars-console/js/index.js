console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    return data.results;
}

const starwarsDB = await fetchData();
console.log(starwarsDB);
const r2d2EyeColor = starwarsDB.find((character) => character.name == "R2-D2").eye_color;
console.log("R2-D2 Eyecolor", r2d2EyeColor);
