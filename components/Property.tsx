import { PropertyObject } from "@/types/types";
import MakeOfferForm from './MakeOfferForm';
import { auth } from "@clerk/nextjs/server";


/**
 * Property display component
 *
 * Shows property information and renders form to make offer
*/
export default function Property({ property }: { property: PropertyObject; }) {
    const { id, description, address, startingPrice } = property;
    const { userId } = auth();

    if (userId) {
        return (
            <div>
                <h1>{address}</h1>
                <p>{description}</p>
                <p>Starting price: {startingPrice}</p>
                <MakeOfferForm propertyId={id} userId={userId} />
            </div>
        );
    }
}
