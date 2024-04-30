import { ChangeEvent, FormEvent, useState } from "react";



const API_BASE_URL = "https://angry-meals-rescue.loca.lt/api";


/** Form to add a property */
export default function AddPropertyForm() {

    const [formData, setFormData] = useState({
        description: "",
        address: "",
        startingPrice: ""
    });

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
            <h3>Add a Property</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="startingPrice">Starting Price</label>
                <input
                                    id="startingPrice"
                                    type="number"
                                    name="startingPrice"
                                    value={formData.startingPrice}
                                    onChange={handleChange} />
                <label htmlFor="description">Description</label>
                <input
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange} />
                <label htmlFor="address">Address</label>
                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange} />

                <button>Add Property</button>
            </form>
        </div>
    )
}