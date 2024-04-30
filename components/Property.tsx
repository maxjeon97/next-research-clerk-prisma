import { PropertyObject } from "@/types/types";
import MakeOfferForm from './MakeOfferForm';


/**
 * Property display component
 *
 * Shows property information and renders form to make offer
*/
export default function Property({ property }: { property: PropertyObject; }) {
    const { id, description, address, startingPrice } = property;

    return (
        <div>
            <h1>{address}</h1>
            <p>{description}</p>
            <p>Starting price: {startingPrice}</p>
            <MakeOfferForm propertyId={id}/>
        </div>
    );
}
