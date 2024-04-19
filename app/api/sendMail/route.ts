

import { sendMail } from '@/lib/mailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request:NextRequest){

const body =await request.json()
const result=await sendMail( body)

return NextResponse.json({result})
   
}
