import { saveUser } from "@/app/utils/handler";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        saveUser(body);
        return NextResponse.json({
            success: true,
            message: "User saved"
        })
    }
    catch (error) {
        return NextResponse.json({
            success: false,
            message: error
        })
    }

}