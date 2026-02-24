import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const contact = {
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      service: body.service || 'General Inquiry',
      message: body.message,
      read: false,
      createdAt: new Date(),
    };

    await db.collection('contacts').insertOne(contact);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}
