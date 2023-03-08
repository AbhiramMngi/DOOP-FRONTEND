import React from "react";
import './components/LoginPage.module.css';
import { Card, Text, CardBody, CardHeader, Heading } from '@chakra-ui/react'

export const LoginPage = () => {
    return (
        <>
            <div className="login-page-container">
                <Card key={'login-card'} variant={'outline'}>
                    <CardHeader>
                        <Heading>Login</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Hello World</Text>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}