import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="bg-blue-950 left-0 right-0 h-20 flex flex-row items-center justify-around">
        <Link href={"/auth"}>
          <div className="bg-amber-200 py-2 px-6 font-bold text-2xl rounded-xl hover:bg-amber-400 ">
            Login
          </div>
        </Link>
        <Link href={"/dashboard"}>
          <div className="bg-amber-200 py-2 px-6 font-bold text-2xl rounded-xl hover:bg-amber-400 ">
            Dashboard
          </div>
        </Link>
      </nav>
    </div>
  );
}
