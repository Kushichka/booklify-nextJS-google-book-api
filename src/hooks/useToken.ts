import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export const useToken = () => {
    const session = useSession();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        if (session?.data?.access_token) {
            setToken(session?.data?.access_token);
        }
    }, [session]);

    return { token };
};
