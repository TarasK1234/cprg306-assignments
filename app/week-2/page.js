import StudentInfo from "./student-info";
import Link from "next/link";


export default function Page() {
    return (
      <main>
        <h1>Week 2</h1>
        <StudentInfo />
        <Link href="/">Home</Link>
      </main>
    );
  }