import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    // Function to update the user state (e.g., after login or signup)
    const updateUser = (userData) => {
        setUser(userData);
    };

    const signIn = async (username, password) => {
        try {
            // Simulate a delay to simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Simple mock login logic for testing
            if (username === 'user' && password === 'password') {
                const user = { name: 'Test User', email: 'test@email.com' };
                setUser(user);
                return user;
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            throw error;
        }
    };

    const signUp = async (username, password, email, name) => {
        try {
            // Simulate a delay to simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Simple mock signup logic for testing
            const newUser = { name, email };
            setUser(newUser);
            return newUser;
        } catch (error) {
            throw error;
        }
    };

    const signOut = async () => {
        try {
            // Simulate a delay to simulate API call
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Clear the user state to simulate sign-out
            setUser(null);
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider
            value={ { user, signIn, signUp, signOut, updateUser } }
        >
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
