import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { cadastroUsuario } from '../../service/Service';
import './CadastroUsuario.css'
import { toast } from 'react-toastify';
import ImagemForm from '../../imagens/imagem-form.png';
import ImagemLogo from '../../imagens/logo.png';


function CadastroUsuario() {
    let history = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            login: '',
            usuario: '',
            foto: '',
            senha: ''
        })
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            login: '',
            usuario: '',
            foto: '',
            senha: ''
        })
    useEffect(() => {
        if (userResult.id !== 0) {
            history('/login')
        }
    }, [userResult])
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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
    return(

        <Grid container direction='row' justifyContent='center' alignItems='center' p={1}>
        <Grid item xs={6} >
            <img src={ImagemForm} alt="" className='imagem2' />
            <Typography variant="h1" className="texto-principal2">Faça o seu cadastro, tenha acesso aos conteúdos e aproveite para interagir com as postagens
            </Typography>
        </Grid>
        <Grid item xs={6} alignItems='center' className='boxCadastrar'>
            <Box paddingX={10}>
                <form onSubmit={onSubmit} >

                    <img src={ImagemLogo} alt="" className='imagem3'/>

                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className=''></Typography>

                    <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='primeiro nome' variant='outlined' name='nome' margin='normal' fullWidth></TextField>

                    <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='e-mail' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>

                    <TextField value={user.login} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='login' label='login' variant='outlined' name='login' margin='normal' fullWidth></TextField>

                     <TextField value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='password'></TextField>

                    <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)}  id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmaSenha' margin='normal' fullWidth type='password'></TextField>

                    <Box marginTop={2} textAlign='center'>
                    <Link to='/login' className='text-decorator-none'>
                            <Button variant='contained' color='primary' className='btnCancelar btn-sec fonte-fredoka' >
                                Cancelar
                            </Button>
                    </Link>
                        <Button type='submit' variant='contained' color='primary' className='btn fonte-fredoka'>
                            Cadastrar
                        </Button>
                    </Box>
                </form>
            </Box>
        </Grid>
    </Grid>
    );


}
export default CadastroUsuario;