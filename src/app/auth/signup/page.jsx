'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpPage = () => {

    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            if (response.ok) {
                console.log("Created Account Succesfully");
                router.push('/auth/login');
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const [hide, setHide] = useState(false);


    return (
        <>
        <head>
            <title>Sign-up</title>
        </head>
            <div className="w-full h-[100vh] customflex">
                <div className="w-[70%] h-[600px] border customflex flex-col md:flex-row shadow-xl overflow-hidden rounded-xl">
                    <div className="w-[50%] h-full bg-[--primary-color] customflex">
                        <div className="overflow-hidden">
                            <div className="w-full text-center customflex flex-col gap-2">
                                <h1 className="poppins text-4xl font-semibold text-white">Welcome</h1>
                                <p className="poppins text-sm text-[#fafafa]">Enter your detail to connect with us..</p>
                            </div>
                            <img src="/signup.png" alt="Sign up image" className="mt-3 rotate-[-90deg] w-[250px] md:w-[280px] lg:w-[320px] drop-shadow-sm" />
                        </div>
                    </div>
                    <div className="w-[50%] h-full p-8 customflex">
                        <div className="w-full text-left p-4">
                            <h1 className="text-3xl font-semibold text-[--primary-black] mb-8">Sign Up</h1>
                            <hr />
                            <form action="#" className="w-full mt-7 flex flex-col gap-4" onSubmit={onSubmitHandler}>
                                <div className="w-full flex flex-col items-start relative">
                                    <label htmlFor="Username" className="text-[#666]">Username :</label>
                                    <input
                                        type="text"
                                        name="username"
                                        // placeholder="Username"
                                        className="w-full py-2 outline-0 border-b-2 text-[--primary-black] text-md"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>

                                <div className="w-full flex flex-col items-start relative">
                                    <label htmlFor="Email" className="text-[#666]">Email :</label>
                                    <input
                                        type="email"
                                        name="email"
                                        // placeholder="email"
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
                                        // placeholder="Password"
                                        className="w-full py-2 outline-0 border-b-2 text-[--primary-black] text-md"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className="absolute bottom-4 right-4 text-xl text-[#666] cursor-pointer" onClick={() => {
                                        setHide(!hide);
                                    }}> {(!hide) ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                                </div>

                                <div className="w-full">
                                    <Link href={"/auth/login"} className="text-sm text-blue-400"><span>Already have Account, Sign in!</span></Link>
                                </div>

                                <div className="w-full mt-4">
                                    <button type="submit" className="transtion duration-300 ease-in-out w-full p-[10px] bg-[--btn-color] text-white hover:bg-[#6964f8]">Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpPage;
