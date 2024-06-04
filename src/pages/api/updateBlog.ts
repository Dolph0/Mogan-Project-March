import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const updateBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing the form:", err);
      return res
        .status(500)
        .json({ message: "Internal Server Error: Error parsing the form" });
    }

    console.log("Fields:", fields);
    console.log("Files:", files);

    try {
      // Asegurarse de que fields.content es una cadena
      const contentArray = fields.content;
      const content = Array.isArray(contentArray)
        ? contentArray[0]
        : contentArray;

      if (files.image) {
        const imageFileArray = files.image;
        const imageFile = Array.isArray(imageFileArray)
          ? imageFileArray[0]
          : imageFileArray;

        const tempPath = imageFile.filepath;
        const fileName = imageFile.originalFilename || "uploaded_image";
        const newPath = path.join(process.cwd(), "public", "uploads", fileName);

        // Asegúrate de que la carpeta de destino existe
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        fs.rename(tempPath, newPath, (err) => {
          if (err) {
            console.error("Error saving the image file:", err);
            return res.status(500).json({
              message: "Internal Server Error: Error saving the image file",
            });
          }

          console.log("Image saved successfully:", newPath);
          // Aquí puedes realizar operaciones adicionales con el contenido y la imagen guardada

          res.status(200).json({ message: "Blog updated successfully" });
        });
      } else {
        // No hay imagen, solo actualizar el contenido
        // Aquí puedes realizar operaciones adicionales solo con el contenido

        res.status(200).json({ message: "Blog updated successfully" });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      return res
        .status(500)
        .json({ message: "Internal Server Error: Unexpected error" });
    }
  });
};

export default updateBlog;
