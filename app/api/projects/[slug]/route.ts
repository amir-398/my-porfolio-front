import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  try {
    const response = await axios.get(
      `https://my-porfolio-back-1.onrender.com/projects/cards/${slug}`
    );
    return NextResponse.json(response.data);
  } catch (error) {
    throw error;
  }
};
