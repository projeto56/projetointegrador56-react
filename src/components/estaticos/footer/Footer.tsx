import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/material';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display='flex' alignItems='center' justifyContent='center' >
                            <Typography variant='h5' align='center' gutterBottom className='textos'>
                                Acompanhe nosso projeto
                            </Typography>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='center' >
                            <a href='https://github.com/projeto56'>
                                <GitHubIcon className='redes'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant='subtitle2' align='center' gutterBottom className='textos'>
                                &copy; 2020 Copyright:
                            </Typography>
                        </Box>
                        <Box>

                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </>

    )
}

export default Footer