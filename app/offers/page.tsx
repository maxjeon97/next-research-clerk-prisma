import NavBar from "@/components/NavBar";
import { auth } from "@clerk/nextjs/server";
import { OfferObject } from "@/types/types";
import Offer from "@/components/Offer";


const API_BASE_URL = "http://localhost:3000/api";

/**
 * Offers component
 *
 * Renders list of offers that the user has submitted
 *
 */

export default async function Offers() {
  const { userId } = auth();

  const userResponse = await fetch(`${API_BASE_URL}/users/${userId}/offers`);
  const userData = await userResponse.json();
  console.log(userData);

  return (
    <div>
      <NavBar />
      <div className="Offers">
        {userData.user.offers.map((o: OfferObject) => <Offer key={o.id} offer={o} />)}
      </div>
    </div>
  );
}