import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <div className="container">
        <h1 className="text-[#eee] text-3xl font-bold text-center">
          Quiz Star
        </h1>
        <p></p>
        <Link href="/quiz">
          <button className="bg-gray-500 p-4 rounded-md cursor-pointer mt-3 text-xl font-semibold hover:bg-gray-700">
            Start Quiz
          </button>
        </Link>
        <Link href="/add-quiz">
          <button className="bg-gray-500 p-4 rounded-md cursor-pointer mt-3 text-xl font-semibold hover:bg-gray-700">
            Add Quiz
          </button>
        </Link>
      </div>
    </main>
  );
}
