import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import Logo from '../../../imagens/logo.png';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let usenavigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert('Usuario deslogado')
        usenavigate('/login');
    }
    var navbarComponent;
    if (token !== "") {
        navbarComponent = <AppBar position="static" className='bg-menu'>
            <Toolbar variant="dense">
                <Box display="flex" justifyContent="space-between" className='space'>

                <Link to="/home" className="text-decorator-none">
                    <Box className='cursor'>
                        <img src={Logo} width="150px" />
                           
                    </Box>
                    </Link>
                    {/* <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link> */}

                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                    </Link>



                    <Box display="flex" justifyContent="space-evenly">
                        <Link to='/sobrenos' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h5" >
                                    Sobre-nós
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h5" >
                                Logout
                            </Typography>
                        </Box>


                    </Box>
                </Box>

            </Toolbar>
        </AppBar>
    }

    return (
        <>

            {navbarComponent}

        </>
    )
}

export default Navbar;