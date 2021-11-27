import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const session_access_token = req.headers.get('session_access_token')

  if (session_access_token) {
    console.log('\x1b[33m%s\x1b[0m', `SERVER SIDE: setting up session_access_token cookie: ${session_access_token} ({ httpOnly: true, sameSite: 'Lax' })`)
    res.cookie('session_access_token', session_access_token, { httpOnly: true, sameSite: 'Lax' })
    return res;
  }
}