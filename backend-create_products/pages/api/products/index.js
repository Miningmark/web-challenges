import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  //console.log("body", request.body);

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    //console.log("POST");
    try {
      const productData = await Product.create(request.body);
      //console.log("new Product", productData);
      response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.log(error.message);
      response.status(400).json({ error: error.message });
    }
  }
}
