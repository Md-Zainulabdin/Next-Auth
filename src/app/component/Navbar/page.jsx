'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {

    const { data: session, status } = useSession();

    return (
        <nav className="w-full h-[70px] border-b flex items-center px-12 justify-between">
            <div className="logo text-xl font-medium text-[--primary-black]">Next-Auth</div>
            <div className="menu flex flex-row gap-12">
                {(status === "authenticated") ? (<Link href={'/profile'}>Profile</Link>) : null}
                {(status === "authenticated") ? (<button onClick={() => signOut()}>Logout</button>) : null}
                {(status === "unauthenticated") ? (<Link href={'/auth/login'} className="border-2 px-6 py-[5px] text-[--primary-black]">Login</Link>) : null}
            </div>
        </nav>
    )
}

export default Navbar;