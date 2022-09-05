import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static" className='bg-menu'>
                <Toolbar variant="dense">
                    <Box display="flex" justifyContent="space-between" className='space'>
                        <Link to='/home' className='text-decorator-none'>
                            <Box className='cursor'>
                                <Typography variant="h4" color="inherit">
                                    Blog Informativo
                                </Typography>
                            </Box>
                        </Link>

                        <Box display="flex" justifyContent="space-evenly">
                            <Link to='/sobrenos' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h5" color="black">
                                        Sobre-nós
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h5" color="black">
                                        logout
                                    </Typography>
                                </Box>
                            </Link>

                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;