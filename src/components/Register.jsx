import React, { useState } from 'react';
import { RegisterUser } from '../api-adapters/index';
import { useNavigate } from 'react-router-dom';

function Register(props) {
    const setIsLoggedIn = props.setIsLoggedIn;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

 }

export default Register;