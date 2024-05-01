import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/**DELETE request to api/offers/delete
 *
 * Deletes offer from the database
 */

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.offer.delete({
    where: {
      id: body.id
    }
  });

  return NextResponse.json({ offerDeleted: true }, { status: 200 });
}