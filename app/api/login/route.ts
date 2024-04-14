import axios from "axios";

export const GET = async (req: any, res: any) => {
  try {
    const response = await axios.get("http://localhost:3001/verifyToken", {
      withCredentials: true,
    });
    return Response.json(response.data);
  } catch (error) {
    console.log("Erreur lors de la vérification du token:", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const POST = async (req: Request, res: any) => {
  const requestData = await req.json();
  try {
    const response = await axios.post(
      `http://localhost:3001/login`,
      requestData
    );
    const token = response.data.token;

    // res.setHeader(
    //   "Set-Cookie",
    //   `token=${token}; Path=/; HttpOnly; Secure; SameSite=Lax`
    // );

    return Response.json(response.data);
  } catch (error) {
    throw error;
  }
};
