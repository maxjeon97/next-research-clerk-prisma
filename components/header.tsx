"use client";
import Link from "next/link";


export default function Header() {
    return (<div>
        <Link href="/"> Home </Link>
        <div>
            <Link href='/sign-up'>Sign-up</Link>
            <Link href='/sign-in'>Sign-in</Link>
        </div>
    </div>)
}