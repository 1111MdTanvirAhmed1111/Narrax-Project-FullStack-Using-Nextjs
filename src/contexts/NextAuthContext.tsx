'use client'
import { SessionProvider } from "next-auth/react";

const NextAuthContext = ({children}: {children: React.ReactNode}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default NextAuthContext;
