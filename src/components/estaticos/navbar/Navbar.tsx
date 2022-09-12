import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state)=> state.tokens
    );
    let usenavigate= useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert('Usuario deslogado')
        usenavigate('/login');
    }
    var navbarComponent;
    if(token != ""){
        navbarComponent =  <AppBar position="static" className='bg-menu'>
        <Toolbar variant="dense">
            <Box display="flex" justifyContent="space-between" className='space'>
                 
                    <Box className='cursor'>
                        <Typography variant="h4">
                            Blog Informativo
                        </Typography>
                    </Box>
                

                <Box display="flex" justifyContent="space-evenly">
                    <Link to='/sobrenos' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" >
                                Sobre-nós
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" >
                                logout
                            </Typography>
                        </Box>
                    </Link>

                </Box>
            </Box>

        </Toolbar>
    </AppBar>
    }

    return (
        <>
<<<<<<< HEAD
            <AppBar position="static" className='bg-menu'>
                <Toolbar variant="dense">
                    <Box display="flex" justifyContent="space-between" className='space'>
                         
                            <Box className='cursor'>
                                <Typography variant="h4">
                                    Blog Informativo
                                </Typography>
                            </Box>


                        <Box display="flex" justifyContent="space-evenly">
                            <Link to='/sobrenos' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h5" >
                                        Sobre-nós
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h5" >
                                        logout
                                    </Typography>
                                </Box>
                            </Link>

                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
=======
             {navbarComponent}
>>>>>>> 4ce76b13ef861a354703bf898a073eb8dd5076c3
        </>
    )
}

export default Navbar;