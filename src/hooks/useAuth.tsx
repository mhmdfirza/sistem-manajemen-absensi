import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
    id: string;
    name: string;
    email: string;
} | null;

interface AuthContextType {
    user: User;
    isLoading: boolean;
    login: (email: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Simulasi load session
    useEffect(() => {
        const loadSession = async () => {
            setIsLoading(true);
            // TODO: Replace with SecureStore in Real app
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        };
        loadSession();
    }, []);

    const login = async (email: string) => {
        setIsLoading(true);
        setTimeout(() => {
            setUser({ id: "1", name: "Demo User", email });
            setIsLoading(false);
        }, 800);
    };

    const logout = async () => {
        setIsLoading(true);
        setTimeout(() => {
            setUser(null);
            setIsLoading(false);
        }, 500);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
