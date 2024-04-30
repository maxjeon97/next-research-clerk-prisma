import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/**POST request to api/users/delete
 *
 * Deletes user from the database using the Prisma Client
 */

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.user.delete({
    where: {
      id: body.data.id
    }
  });

  return NextResponse.json({ deleted: true }, { status: 200 });
}