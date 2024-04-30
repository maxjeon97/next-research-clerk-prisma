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

// 'use client';
// import { useAuth } from "@clerk/nextjs";

// export default function Profile(){
//   const { has } = useAuth();

//   const canManageSettings = has({ permission: "org:team_settings:manage" });

//   if(!canManageSettings) return null;

//   return (
//     <div>hello</div>
//   )
// }