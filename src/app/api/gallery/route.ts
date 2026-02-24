import { NextResponse } from 'next/server';
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
