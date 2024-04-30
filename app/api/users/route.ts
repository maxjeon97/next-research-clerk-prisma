import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**GET request to api/users
 *
 * Gets user information
 */

export function GET(request: NextRequest) {
  console.log("In GET SPECIFIC USER request");

  return NextResponse.json({ in: "hello" });
}

/**POST request to api/users
 *
 * Adds user to the database using the Prisma Client
 */

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("In POST request");
  await prisma.user.create({
    data: {
      id: body.data.id
    }
  });

  return NextResponse.json({ created: true }, { status: 201 });
}