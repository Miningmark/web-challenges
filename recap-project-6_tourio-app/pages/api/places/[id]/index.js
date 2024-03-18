import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not found" });
    }

    return response.status(200).json(place);
  }

  if (request.method === "DELETE") {
    const place = await Place.findByIdAndDelete(id);
    return response.status(200).json({ status: "successfully Deleted." });
  }

  if (request.method === "PUT") {
    const place = await Place.findByIdAndUpdate(id, request.body);
    response.status(200).json({ message: "Place successfully updated." });
  }
}
