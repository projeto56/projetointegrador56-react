import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { login } from '../../service/Service';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: '',
            token: ''
           
        })

        const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            token: '',
            foto: ""
        })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            history('/home')
        }
    }, [token])

    useEffect(() => {
        if (respUserLogin.token !== "") {

            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)
            
            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))    
            history('/home')
        }
    }, [respUserLogin.token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)

            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        }

    }


    return (

        <Grid container direction='row' justifyContent='center' alignItems='center' className='loginLeft'>
            <Grid alignItems='center' xs={6} className=''>
                <Box paddingX={20} className='efeito-vidro'>
                    <form onSubmit={onSubmit} >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>

                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='e-mail' variant='outlined' name='usuario' margin='normal' fullWidth />


                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />




                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' color='primary' className="btn">
                                Logar
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='Center' marginTop={2} >
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    )
}

export default Login;