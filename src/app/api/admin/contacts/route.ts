import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const contacts = await db
      .collection('contacts')
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    return NextResponse.json(contacts);
  } catch {
    return NextResponse.json([]);
  }
}
