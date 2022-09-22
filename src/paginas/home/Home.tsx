import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@mui/material';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Imagem from '../../imagens/logo.png'





function Home() {
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
          history("/login")
  
      }
  }, [token]) 
    return (
        <>
           <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid className="caixa-home" alignItems="center" item xs={12}>
                    <Box paddingX={20} className='bg-color ' >
                        <img src={Imagem} alt="" className='imagem-logo-home' />
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Aqui você encontra informações confiáveis sobre política e causas sociais e ainda pode contribuir divulgando projetos sociais.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={10} >
                            <ModalPostagem />
                        </Box>
                        <Link to='/posts' className='text-decorator-none'> 
                            <Button variant="outlined" className='botao fonte-fredoka'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} className='homeRight'>
                   
                </Grid>
                <Grid item xs={12} className="fundo-postagens" >
                  <TabPostagem/>  
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

