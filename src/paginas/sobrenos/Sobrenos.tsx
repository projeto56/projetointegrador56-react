import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import {Box} from "@mui/material";
import './Sobrenos.css';

function Sobrenos(){
    return(
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='box sobreNos'>
                <Grid item alignItems='center' xs={6} className='sobreNos-box'>
                    <Box paddingX={20}>
                        <Typography variant='h3' gutterBottom align='center'>
                            Sobre nós
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className="texto">
                            Somos uma organização sem fins lucrativos que objetiva bla blabla Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt porro ducimus molestiae voluptatem neque tempore unde consequatur corrupti laboriosam veniam ipsa repudiandae similique dignissimos, voluptatibus magnam obcaecati mollitia ipsam.
                        </Typography>
                        
                    </Box>

                </Grid>
                <Grid item xs={6} className='imagem1'>
                    
                </Grid>
            </Grid>
        
        </>
    )

}

export default Sobrenos;
