"use client"

/**
 * Delete Button component
 */

export default function DeleteButton({ handleDelete }: {handleDelete: any}) {
    const buttonStyle = {
        color: "white",
        backgroundColor: "red",
        borderRadius: '5px',
        cursor: 'pointer'
    };

    function handleClick() : void {
        handleDelete();
    }

    return (
        <button style={buttonStyle} onClick={handleClick}>
            Cancel Offer
        </button>
    );
}