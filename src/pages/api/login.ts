import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { user, password } = req.body;

  // Credenciales válidas
  const validUser = "administradordenoticias";
  const validPassword = "moganforever84";

  if (user === validUser && password === validPassword) {
    return res.status(200).json({ success: true });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }
};

export default handler;
