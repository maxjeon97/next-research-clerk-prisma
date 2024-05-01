import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/**GET request to api/properties
 *
 * Gets all the properties from the database
 */

export async function GET(req: NextRequest) {

  const properties = await prisma.property.findMany();

  return NextResponse.json({ properties });
}


/**POST request to api/properties
 *
 * Adds property to the database
 */

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.property.create({
    data: {
      description: body.description,
      address: body.address,
      startingPrice: Number(body.startingPrice)
    }
  });

  return NextResponse.json({ created: true }, { status: 201 });
}