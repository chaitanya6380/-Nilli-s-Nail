import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const [galleryCount, membershipsCount, contactsCount, recentContacts] =
      await Promise.all([
        db.collection('gallery').countDocuments(),
        db.collection('memberships').countDocuments(),
        db.collection('contacts').countDocuments(),
        db
          .collection('contacts')
          .find()
          .sort({ createdAt: -1 })
          .limit(5)
          .toArray(),
      ]);

    return NextResponse.json({
      gallery: galleryCount,
      memberships: membershipsCount,
      contacts: contactsCount,
      recentContacts,
    });
  } catch {
    return NextResponse.json({
      gallery: 0,
      memberships: 0,
      contacts: 0,
      recentContacts: [],
    });
  }
}
