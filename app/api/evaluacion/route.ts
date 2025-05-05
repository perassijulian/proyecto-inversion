import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const data = await req.json();

  const proyecto = await prisma.project.create({
    data: {
      ...data,
      user: {
        connectOrCreate: {
          where: { id: data.userId },
          create: { id: data.userId },
        },
      },
    },
  });

  return NextResponse.json(proyecto);
}
