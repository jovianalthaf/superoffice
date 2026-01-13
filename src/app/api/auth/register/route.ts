import { prisma } from "@/app/lib/prisma";
import { hash } from "bcrypt-ts";
import ApiResponse, { ApiError } from "@/app/lib/ApiResponse";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Validasi
    if (!name || !email || !password) {
      return ApiError("Name, email, dan password wajib diisi", 400);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return ApiError("Email sudah terdaftar", 400);
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Jangan kirim password ke client
    const { password: _, ...safeUser } = user;

    return ApiResponse(safeUser, "Register berhasil", 201);
  } catch (error) {
    console.error(error);
    return ApiError("Terjadi kesalahan server", 500);
  }
}
