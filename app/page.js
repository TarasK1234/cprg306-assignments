import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-sans mb-4" >CPRG 306: Web Development 2 - Assignments </h1>
      <ul>
        <li className="flex flex-col space-y-2">
          <Link href="./week-2/" className="underline text-violet-600 hover:text-violet-400">Week 2- Student Info</Link>
          <Link href="./week-3/" className="underline text-violet-600 hover:text-violet-400">Week 3- Student Info</Link>
          <Link href="./week-4/" className="underline text-violet-600 hover:text-violet-400">Week 4- Basic Interactivity</Link>
          <Link href="./week-5/" className="underline text-violet-600 hover:text-violet-400">Week 5- Interactivity with forms</Link>
          <Link href="./week-6/" className="underline text-violet-600 hover:text-violet-400">Week 6- Handling Lists</Link>

        </li>
      </ul>
    </main>

  );
}
