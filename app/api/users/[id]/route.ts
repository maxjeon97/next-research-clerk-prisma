import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/**GET request to api/users/[id]
 *
 * Gets user information
 * returns { id, isAdmin }
 */

export async function GET(request: NextRequest, data: { params: { id: string; }; }) {
  const userId = data.params.id;

  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });

  return NextResponse.json({ user });
}