import Head from "next/head";
import Navbar from "./component/Navbar/page";

const HomePage = () => {
  return (
    <div>
      <head>
        <title>Home</title>
      </head>
      <Navbar/>
      <div className="w-full h-[90vh] flex justify-center items-center">
        <div>
          <h1 className="text-2xl">Home Page</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;