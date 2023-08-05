'use client'
import { useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";

const LoginPage = () => {

    const router = useRouter();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [hide, setHide] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const onLoginHandler = async (e) => {
        e.preventDefault();

        const data = await signIn('credentials', { redirect: false, email, password });
        if (data.error === null && data.ok === true) {
            alert("sucessfully login");
            setPasswordError(false);
            router.replace("/profile");
        }
        else if (data.error === "Incorrect Password") {
            setPasswordError(true);
        }
        else if (data.error === "User not Found") {
            alert("not Found")
        }
        else {
            alert("failed to login")
        }

        console.log('data', data);
    }

    return (
        <>
            <head>
                <title>Login</title>
            </head>
            <div className="w-full h-[100vh] customflex">
                <div className="w-[30%] h-[500px] border flex flex-row shadow-xl overflow-hidden rounded-xl">
                    <div className="w-full h-full p-8 flex flex-col items-start justify-center">
                        <h1 className="text-3xl font-semibold text-[--primary-black] mb-8">Login</h1>
                        <span className="w-full border-b "></span>
                        <form action="#" className="w-full mt-7 flex flex-col gap-4" onSubmit={onLoginHandler}>
                            <div className="w-full flex flex-col items-start relative">
                                <label htmlFor="Email" className="text-[#666]">Email :</label>
                                <input
                                    type="email"
                                    name="Email"
                                    // placeholder="Email"
                                    className="w-full py-2 outline-0 border-b-2 text-[--primary-black] text-md"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="w-full flex flex-col items-start relative">
                                <label htmlFor="Password" className="text-[#666]">Password :</label>
                                <input
                                    type={(!hide) ? "password" : "text"}
                                    name="password"
                                    // placeholder="Enter your password"
                                    className="w-full py-2 outline-0 border-b-2 text-[--primary-black] text-md"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="absolute bottom-4 right-4 text-xl text-[#666] cursor-pointer" onClick={() => {
                                    setHide(!hide);
                                }}> {(!hide) ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                            </div>
                            <div className="error-alert">
                                {(passwordError) ? (<span className="text-red-500 text-md">Incorrect Password</span>) : null}
                            </div>
                            <div className="w-full">
                                <Link href={"/auth/signup"} className="text-sm text-blue-400"><span>Don't have Account, Sign up!</span></Link>
                            </div>

                            <div className="w-full mt-4">
                                <button type="submit" className="transtion duration-300 ease-in-out w-full p-[10px] bg-[--btn-color] text-white hover:bg-[#6964f8]">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;