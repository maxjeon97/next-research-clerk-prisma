"use client"

import { ChangeEvent, FormEvent, useState } from "react";



const API_BASE_URL = "http://localhost:3000/api";


/** Form to make an offer on a property */
export default function MakeOfferForm({ propertyId, userId }: { propertyId: number, userId: string }) {
    const initialData = { amount: "" };

    const [formData, setFormData] = useState(initialData);

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
        setFormData(initialData);
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
            <label htmlFor="amount">Offer Amount: </label>
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