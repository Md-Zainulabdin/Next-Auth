import Link from "next/link";

const notFound = () => {
    return (
        <div className="w-full h-[100vh] customflex">
            <div className="w-full max-w-[500px] border customflex flex-col gap-2 py-6 rounded-md">
                <h1 className="text-4xl font-semibold text-red-500">Sorry!</h1>
                <h2 className="text-3xl text-[#222]">Page not found</h2>
                <Link href="/" className="px-5 py-2 border mt-4 bg-[--primary-color] text-white rounded-[8px]">Back to Home</Link>
            </div>
        </div>
    )
}

export default notFound;