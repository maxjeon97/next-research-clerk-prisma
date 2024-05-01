"use client"

import { OfferObject } from "@/types/types";
import { useAuth } from "@clerk/nextjs";
import DeleteButton from "./DeleteButton";
import { useRouter } from "next/navigation";

const API_BASE_URL = "http://localhost:3000/api";

/**
 * Offer component
 *
 * Shows offer information and allows for deletion
*/
export default function Offer({ offer }: { offer: OfferObject; }) {
    const { id, amount, property } = offer;
    const { userId } = useAuth();
    const router = useRouter();

    async function handleDelete() : Promise<void> {
        await fetch(`${API_BASE_URL}/offers/delete`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        });
        router.refresh();
    }

    if (userId) {
        return (
            <div>
                <h1>Offer ID#{id}</h1>
                <p>Amount Offered: ${amount}</p>
                <h2>Property Information</h2>
                <p>Address: {property.address}</p>
                <p>Description: {property.description}</p>
                <p>Starting Price: {property.startingPrice}</p>
                <DeleteButton handleDelete={handleDelete} />
            </div>
        );
    }
}
