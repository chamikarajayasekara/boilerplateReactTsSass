import React from 'react';
import {Container} from "react-bootstrap";
import Login from "./components/Login";

const AuthenticationWrapper = () => {
    return (
        <Container fluid className="layout-bar">
            <Login/>
        </Container>
    );
};

export default AuthenticationWrapper;