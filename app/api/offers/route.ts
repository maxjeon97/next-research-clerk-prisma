import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**POST request to api/offers
 *
 * Adds offer to the database
 */

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.offer.create({
    data: {
      amount: body.data.amount,
      buyerId: body.data.id
    }
  });

  return NextResponse.json({ created: true }, { status: 201 });
}