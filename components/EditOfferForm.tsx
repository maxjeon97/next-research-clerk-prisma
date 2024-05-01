"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { OfferObject } from "@/types/types";


/** Form to make an offer on a property */
export default function EditOfferForm({handleUpdate, offer} : {handleUpdate: any , offer: OfferObject}) {

    const router = useRouter();
    const initialData = {amount: offer.amount};
    const buttonStyle = {
        color: "white",
        backgroundColor: "blue",
        borderRadius: '5px',
        cursor: 'pointer'
    };

    const [formData, setFormData] = useState(initialData);

    /** handles form submission */
    async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        handleUpdate(formData);
        router.refresh();
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
            <label htmlFor="amount">Current Offer: </label>
            <div>
                <input
                    id="amount"
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange} />
            </div>
            <br />
            <div>
                <button style={buttonStyle}>Make New Offer</button>
            </div>
        </form>
    )
}