import React from 'react';
import {Routes, Route} from "react-router-dom";
import AuthenticationWrapper from "./features/authentication/AuthenticationWrapper";

const RoutesLayout = () => {
    return (
            <Routes>
                <Route path="/" element={<AuthenticationWrapper />}/>
                <Route path="/login" element={<AuthenticationWrapper />}/>
                <Route path="/users" element={<AuthenticationWrapper />}/>
            </Routes>
    );
};

export default RoutesLayout;