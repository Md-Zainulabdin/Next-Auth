'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {

    const { data: session, status } = useSession();

    return (
        <nav className="w-full h-[70px] border-b flex items-center px-12 justify-between">
            <div className="logo">Logo</div>
            <div className="menu flex flex-row gap-12">
                {(status === "authenticated") ? (<Link href={'/profile'}>Profile</Link>) : null}
                {(status === "authenticated") ? (<button onClick={() => signOut()}>Logout</button>) : null}
                {(status === "unauthenticated") ? (<Link href={'/auth/login'}>Login</Link>) : null}
            </div>
        </nav>
    )
}

export default Navbar;