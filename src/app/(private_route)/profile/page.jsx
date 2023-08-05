'use client'
import Navbar from "@/app/component/Navbar/page";
import { useSession } from "next-auth/react";


const ProfilePage = () => {

    const { data: session, status } = useSession();

    return (
        <div>
            <head>
                <title>profile Page</title>
            </head>
            <Navbar />
            <div className="w-full h-[90vh] customflex">
                <div className="text-center">
                    <span className="text-2xl">Hello {session?.user?.name}</span>
                    <h1 className="text-3xl mt-3">Welcome to the Profile Page..</h1>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;

