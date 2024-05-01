"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const API_BASE_URL = "http://localhost:3000/api";


/** Form to add a property */
export default function AddPropertyForm() {
    const initialData = {
        description: "",
        address: "",
        startingPrice: ""
    };

    const [formData, setFormData] = useState(initialData);

    const router = useRouter();

    /** handles form submission */
    async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        await fetch(`${API_BASE_URL}/properties`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                description: formData.description,
                address: formData.address,
                startingPrice: formData.startingPrice,
            })
        });
        setFormData(initialData);
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
        <div>
            <h2>Add a Property</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="address">Address: </label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange} />
                <br />
                <label htmlFor="description">Description: </label>
                <input
                    id="description"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange} />
                <br />
                <label htmlFor="startingPrice">Starting Price: </label>
                <input
                    id="startingPrice"
                    type="number"
                    name="startingPrice"
                    value={formData.startingPrice}
                    onChange={handleChange} />
                <br />
                <button>Add Property</button>
            </form>
        </div>
    );
}