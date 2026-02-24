import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const items = await db
      .collection('gallery')
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    return NextResponse.json(items);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    const body = await request.json();

    const item = {
      title: body.title,
      category: body.category,
      image: body.image,
      createdAt: new Date(),
    };

    const result = await db.collection('gallery').insertOne(item);
    return NextResponse.json(
      { ...item, _id: result.insertedId },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
