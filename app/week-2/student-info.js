import Link from "next/link";


export default function StudentInfo(){

    return(
        <div>
            <h2 >Student Info</h2>
            <h4>Taras Kovalko</h4>
            <Link href="https://github.com/TarasK1234/cprg306-assignments.git" className=" text-violet-500">GitHub Repository</Link>
        </div>
    );
}