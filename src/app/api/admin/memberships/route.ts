import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const members = await db
      .collection('memberships')
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    return NextResponse.json(members);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    const body = await request.json();

    const member = {
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      tier: body.tier,
      status: body.status || 'active',
      createdAt: new Date(),
    };

    const result = await db.collection('memberships').insertOne(member);
    return NextResponse.json(
      { ...member, _id: result.insertedId },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
