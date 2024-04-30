import { ChangeEvent, FormEvent, useState } from "react";
import { auth } from "@clerk/nextjs/server";



const API_BASE_URL = "https://angry-meals-rescue.loca.lt/api";


/** Form to make an offer on a property */
export default function MakeOfferForm({ propertyId }: { propertyId: number; }) {
    const { userId } = auth();
    const [formData, setFormData] = useState({ amount: "" });
    /** handles form submission */
    async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        await fetch(`${API_BASE_URL}/offers`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                amount: formData.amount,
                buyerId: userId,
                propertyId: propertyId
            })
        });

    }

    /** handles input change */
    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        const { name, value } = evt.target;
        setFormData(d => ({
            ...d,
            [name]: value,
        }));
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="amount">Offer Amount</label>
            <input
                                id="amount"
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange} />

            <button>Make Offer</button>
        </form>
    )
}