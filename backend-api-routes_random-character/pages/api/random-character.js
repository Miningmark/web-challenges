import Chance from "chance";

export default function handle(request, response) {
  const chance = new Chance();
  const character = { name: chance.name(), age: chance.age };
}
