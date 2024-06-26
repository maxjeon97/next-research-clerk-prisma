import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/**GET request to api/offers
 *
 * Gets all the offers from the database
 */

export async function GET(req: NextRequest) {

  const offers = await prisma.offer.findMany({
    orderBy: {
      id: 'asc'
    }
  });

  return NextResponse.json({ offers });
}

/**POST request to api/offers
 *
 * Adds offer to the database
 */

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.offer.create({
    data: {
      amount: Number(body.amount),
      buyerId: body.buyerId,
      propertyId: body.propertyId
    }
  });

  return NextResponse.json({ created: true }, { status: 201 });
}