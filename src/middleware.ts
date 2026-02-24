import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path === '/admin/login') {
    return NextResponse.next();
  }

  const token = request.cookies.get('admin_session')?.value;

  if (!token) {
    if (path.startsWith('/api/admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'nillis-admin-default-secret-2024'
    );
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    if (path.startsWith('/api/admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
