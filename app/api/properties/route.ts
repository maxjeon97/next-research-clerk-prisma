import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/**GET request to api/properties
 *
 * Gets all the properties from the database
 */

export async function GET(req: NextRequest) {

  const properties = await prisma.user.findMany();

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
      description: body.data.description,
      address: body.data.address,
      startingPrice: body.data.startingPrice,
      available: body.data.available
    }
  });

  return NextResponse.json({ created: true }, { status: 201 });
}