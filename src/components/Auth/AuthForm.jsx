import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
    Alert,
    AlertIcon,
    Input,
    Button,
    FormLabel,
    Stack,
} from '@chakra-ui/react';

const AuthForm = ({ type }) => {
    const { signIn, signUp } = useAuth();
    const [ formData, setFormData ] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    });

    const [ error, setError ] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [ e.target.name ]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            if (type === 'login') {
                await signIn(formData.username, formData.password);
            } else {
                await signUp(
                    formData.username,
                    formData.password,
                    formData.email,
                    formData.name
                );
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            { error && (
                <Alert status="error" mb={ 4 }>
                    <AlertIcon />
                    { error }
                </Alert>
            ) }
            <Stack spacing={ 4 }>
                { type === 'signup' && (
                    <div>
                        <FormLabel htmlFor="name">Full Name</FormLabel>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={ formData.name }
                            onChange={ handleChange }
                        />
                    </div>
                ) }
                <div>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={ formData.username }
                        onChange={ handleChange }
                    />
                </div>
                {/* Render Email input field for signup */ }
                <div>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={ formData.email }
                        onChange={ handleChange }
                    />
                </div>

                {/* Render Password input field */ }
                <div>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={ formData.password }
                        onChange={ handleChange }
                    />
                </div>
                <Button colorScheme="blue" type="submit">
                    { type === 'login' ? 'Log In' : 'Sign Up' }
                </Button>
            </Stack>
        </form>
    );
};

export default AuthForm;
