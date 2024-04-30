import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import './NavBar.css';

export default async function NavBar() {
    const { userId } = auth();

    function generateAnonNavBar() {
        return (
            <div>
                <Link href='/sign-up'> Sign-up </Link>
                <Link href='/sign-in'> Sign-in </Link>
            </div>
        );
    }

    function generateLoggedInNavBar() {
        return (
            <div>
                <Link href='/offers'> Offers </Link>
                <UserButton />
            </div>);
    }

    return (
        <div>
            <Link href="/"> Home </Link>
            {userId
                ? generateLoggedInNavBar()
                : generateAnonNavBar()}
        </div>);
}