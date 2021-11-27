// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Cookies = {
  [key: string]: string
}

type Data = {
  serverSideCookies: Cookies
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('\x1b[33m%s\x1b[0m', `SERVER SIDE: Get cookies`, req.cookies)
  res.status(200).json({ serverSideCookies: req.cookies })
}
