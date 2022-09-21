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
                        <Typography variant='h4' gutterBottom align='center'>
                            Sobre nós
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className="texto">
                        Nós do grupo 1, nos propomos a construir um blog onde será publicado links de instituições do âmbito político para auxiliar as pessoas com informações atualizadas e verídicas e também com espaço para divulgação de diversas ongs com trabalho relevante para o desenvolvimento sustentável.
                        </Typography>
                        <Typography className="texto">
                        Nosso site te o intuito de informar as pessoas sobre as principais atribuições das instituições públicas do Brasil, descrever o papel de cada cargo político na administração pública e divulgar ongs que trabalham para reduzir violências.
                        </Typography>
                        <Typography className="texto">
                        Buscamos assim, ajudar a população com informações relevantes sobre a politica nacional e projetos sociais: área de atuação, formas de financiamento, exposição dos sites institucionais.
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
