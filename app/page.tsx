import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="bg-gray-100 left-0 right-0 h-20 flex flex-row items-center justify-between px-20 shadow-xl shadow-gray-300">
        <Link href={"/"}>
          <div className=" bg-amber-100 py-1 px-6 font-bold text-xl rounded-xl hover:bg-amber-200 ">
            Home
          </div>
        </Link>
        <div className="flex gap-x-6">
          <Link href={"/auth"}>
            <div className="bg-amber-100 py-1 px-6 font-bold text-xl rounded-xl hover:bg-amber-200 ">
              Login
            </div>
          </Link>
          <Link href={"/dashboard"}>
            <div className="bg-amber-100 py-1 px-6 font-bold text-xl rounded-xl hover:bg-amber-200 ">
              Dashboard
            </div>
          </Link>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="font-bold text-2xl">Home Page </h1>
      </div>
    </div>
  );
}
