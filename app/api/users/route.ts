import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  return NextResponse.json({ name: 'Elie' });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  // do some DB related things or fetch additional data

  return NextResponse.json({ created: true });
}