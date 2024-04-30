'use client';
// import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Profile() {
    // const { has } = useAuth();

    const {user} = useUser();
    const permissions = user?.publicMetadata.role

    console.log(user)
    console.log('perms', permissions)


    // const isAdmin = has({ permission: "org:admin" });

    return (
        <>
        <h2>
            {/* {isAdmin ? 'YOU ARE AN ADMIN' : 'NOT ADMIN'} */}
            testing
        </h2>

        </>
    )

}
