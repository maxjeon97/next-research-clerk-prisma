import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/**GET request to api/users/[id]/offers
 *
 * Gets user's offers as well as specific property details on each offer
 * { user: { id, offers }}
 * where offers is: [{ id, amount, property}, ...]
 * where property is: { id, description, address, startingPrice }
 */

export async function GET(request: NextRequest, data: { params: { id: string; }; }) {
  const userId = data.params.id;

  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      offers: {
        include: {
          property: true
        },
        orderBy: {
          id: 'asc',
        }
      }
    }
  });

  return NextResponse.json({ user });
}