import Chance from "chance";

export default function handle(request, response) {
  const chance = new Chance();
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    city: chance.city(),
    email: chance.email(),
    id: chance.geohash(),
  };
  response.status(200).json(character);
}
