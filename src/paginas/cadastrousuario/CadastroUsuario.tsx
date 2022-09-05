import React,{useState, useEffect, ChangeEvent} from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../service/Service';
import UserLogin from '../../models/UserLogin';

function Login() {
    let history = useNavigate();
    const[confirmarSenha, setConfirmarSenha] = useState<String>("")
    const[user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            token: '',
            foto: ''  
        })