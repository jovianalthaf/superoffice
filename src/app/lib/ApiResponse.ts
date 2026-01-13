import { NextResponse } from "next/server";

export default function ApiResponse<T>(
  data: T,
  message = "success",
  status = 200
) {
  return NextResponse.json(
    {
      sucess: true,
      message,
      data,
    },
    { status }
  );
}
export function ApiError(message: string, status: number) {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status }
  );
}
