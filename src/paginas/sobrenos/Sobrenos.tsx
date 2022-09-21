import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {Box} from "@mui/material";
import ImgLogo from "../../imagens/logo-favicon.png";
import ImgSobre from "../../imagens/sobre-nos.png";
import './Sobrenos.css';



function Sobrenos(){
    return(
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa-sobre'>
                <Grid item alignItems='center' xs={6} className='caixa-sn'>
                    <Box paddingX={10} >
                        <Typography variant='h2' gutterBottom className="titulo-sn">
                         
                            <img src={ImgLogo} alt="" /> Sobre nós
                        
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className="texto">
                            O <strong>Informa aê</strong> foi idealizado a partir de um projeto no bootcamp Pessoa Desenvolvedora Java,  e construído com o intuito de fornecer conhecimento politico e social para todo o Brasil. </Typography>
                        <Typography className="texto">
                            Aqui você encontra informações verídicas e de fontes confiáveis, além de poder conhecer e divulgar o trabalho de ongs que atuam contra os diversos tipos de violência que existem na nossa sociedade.</Typography>
                        <Typography className="texto">
                            Nosso blog também é um espaço de troca, onde além de adquirir informações, os usuários também podem criar postagens para contribuir com a rede de conhecimento.</Typography>
                        
                    </Box>

                </Grid>
                <Grid item xs={6} className='bx-sobrenos' >
                <img src={ImgSobre} alt="" />
                </Grid>
            </Grid>
        
        </>
    )

}

export default Sobrenos;
