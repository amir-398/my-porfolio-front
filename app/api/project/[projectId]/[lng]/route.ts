import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { projectId: string; lng: string } }
) => {
  const { projectId, lng } = params;
  try {
    const response = await axios.get(
      `https://my-porfolio-back-1.onrender.com/projects/${projectId}/${lng}`
    );
    return NextResponse.json(response.data);
  } catch (error) {
    throw error;
  }
};
