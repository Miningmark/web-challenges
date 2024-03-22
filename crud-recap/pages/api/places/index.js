import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      return response.status(200).json(places);
    } catch {
      console.log(error.message);
      response.status(404).json({ error: error.message });
    }
  }

  if (request.method === "POST") {
    try {
      const placeData = await Place.create(request.body);
      response.status(201).json({ status: "Place created." });
    } catch (error) {
      console.log(error.message);
      response.status(400).json({ error: error.message });
    }
  }
}
