import axios from "axios";
import { NextResponse } from "next/server";
// GET
export const GET = async () => {
  const response = await axios.get("http://localhost:4000/infos/getInfo");
  const data = response.data;
  return NextResponse.json(data);
};

//POST
export const POST = async (req: Request) => {
  const s = await req.json();
  console.log("data", s);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWM0MzNhMDE3NzU5YmM1ZTBkNGJkZiIsImlhdCI6MTcxMzM4MDE1MSwiZXhwIjoxNzEzNDE2MTUxfQ.ydE6TI4CNf2FYo1t5gan7WHWuoZz38V757kAFTjk3cM";

  try {
    const response = await axios.post(
      "http://localhost:4000/infos/addInfo",
      s,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return Response.json(response.data);
  } catch (error) {
    console.log("erro", error);

    throw error;
  }
};

//PUT
export const PUT = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  const data = await req.json();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWM0MzNhMDE3NzU5YmM1ZTBkNGJkZiIsImlhdCI6MTcxMzM4MDE1MSwiZXhwIjoxNzEzNDE2MTUxfQ.ydE6TI4CNf2FYo1t5gan7WHWuoZz38V757kAFTjk3cM";
  try {
    const response = await axios.put(
      `http://localhost:4000/infos/updateInfo/${slug}`,
      data,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return Response.json(response.data);
  } catch (error) {
    throw error;
  }
};
