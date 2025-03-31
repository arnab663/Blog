import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);
        const resp = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                "Accept": "application/json"
            },
            credentials:"include",
            body: JSON.stringify({ email, password })
        })
        const data = await resp.json();
        if (!resp.ok) {
            setIsLoading(false);
            setError(data.error);
        } else {
            localStorage.setItem('Blog_user', JSON.stringify(data));
            dispatch({ type: 'LOGIN', payload: data })

            setIsLoading(false);
        }
    }
    return { login, error, isLoading };
}