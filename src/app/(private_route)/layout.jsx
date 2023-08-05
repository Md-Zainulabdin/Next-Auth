import React from "react";
import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function PrivateLayout({children}) {
    const session = await getServerSession(Options) 

    if (!session?.user) redirect('/auth/login')

    return <>{children}</>

}