import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-3xl">CPRG 306: Web Development 2 - Assignments </p>
      <ul>
        <li>
          <Link href="./week-2/" className="underline text-violet-600 hover:text-violet-400">Week 2- Student Info</Link>
          <Link href="./week-3/" className="underline text-violet-600 hover:text-violet-400">Week 2- Student Info</Link>

        </li>
      </ul>
    </main>

  );
}
