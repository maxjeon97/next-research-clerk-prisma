import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/**POST request to api/offers/update
 *
 * Edits offer in the database
 */

export async function POST(req: NextRequest) {
  const body = await req.json();

  const updatedOffer = await prisma.offer.update({
    where: {id: Number(body.id)},
    data: {
      amount: Number(body.amount)
    }
  });

  return NextResponse.json({ offerUpdated: updatedOffer }, { status: 200 });
}