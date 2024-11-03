import { useEffect, useState } from "react";

export default function DisplayName () {
    const [name, setName] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const encodedName = params.get("name");

        if (encodedName) {
            try {
                const decodedName = atob(encodedName);
                setName(decodedName);
            } catch (error) {
                console.error("Invalid encoding", error);
                setName("Guest");
            }
        }
    }, []);

    return (
        <p className="block font-bold mt-2 text-lg laptop:text-xl">
            {name ? name : "Guest"}
        </p>
    );
}