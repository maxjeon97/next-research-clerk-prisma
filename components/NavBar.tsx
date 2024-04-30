import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function NavBar() {
    const { userId } = auth();

    if (userId) {
        return (
            <div>
                <UserButton />
            </div>);
    }

    return (
    <div>
        <Link href="/"> Home </Link>
        <div>
            <Link href='/sign-up'>Sign-up</Link>
            <Link href='/sign-in'>Sign-in</Link>
        </div>
    </div>);
}