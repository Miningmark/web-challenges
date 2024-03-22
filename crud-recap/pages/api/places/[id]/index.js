import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const id = request.query.id;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Place.findById(id);
    if (!place) {
      return response.status(404).json({ status: "No place found with given ID" });
    }
    return response.status(200).json(place);
  }

  if (request.method === "PUT") {
    const place = await Place.findByIdAndUpdate(id, request.body);
    return response.status(200).json({ status: "Place updated successfully!" });
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    return response.status(200).json({ status: "Deleted the place" });
  }
}
