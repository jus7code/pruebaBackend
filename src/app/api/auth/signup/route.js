import { NextResponse } from "next/server";
import {prisma} from "@/lib/db";
import bcrypt from "bcrypt";


export async function POST(request){
    try{
        const data =await request.json()


        const hashpassword = await bcrypt.hash(data.password,10)
        const newUser = await prisma.user.create({
            data:{
                name: data.name,
                email: data.email,
                password: hashpassword,
                isAdmin: data.isAdmin,
            }
        })
    
        const {password:_,...user} = newUser
        return NextResponse.json(user)
    }
    catch(error){
        return NextResponse.json({message:error.message,},{status: 500,})
    }
}