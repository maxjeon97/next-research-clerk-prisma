import NavBar from "@/components/NavBar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {

  const user = await currentUser();

  const greeting = user ? user.firstName : "Stranger";

  return (
    <div>
      <NavBar />
      <div>Hello {greeting}!</div>
    </div>
  );
}
