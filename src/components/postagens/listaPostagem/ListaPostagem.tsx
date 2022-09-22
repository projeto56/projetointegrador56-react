import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'; 
import { busca } from '../../../service/Service';
import { Box, Grid, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Perfil from '../../../paginas/perfil/Perfil';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let navigate = useNavigate();
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
      navigate("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])


  return (
    <>
      <Grid container>
        <Grid item xs={4} width="100vh">
         <Perfil/>
        </Grid>
        <Grid item xs={8}>
        {
          posts.map(postagem => (
              
                <Box  p={2}>
                  <Card variant="outlined">
                    <CardContent>
                      <div className="conteudo-card">
                        <img src={postagem.foto} alt="" width='400px' className='imagemFoto'/>
                        <div className="conteudo-texto">
                
                          <Typography variant="h5" component="h2">
                            {postagem.titulo}
                          </Typography>
                          <Typography variant="body2" component="p"><strong>
                            Tema: </strong>{postagem.tema?.ong}
                          </Typography>
                
                          <Typography variant="body2" component="p">
                            {postagem.conteudo}
                          </Typography>
                
                          <Typography variant="body2" component="p"><strong>
                          Autor: </strong>{postagem.autor}
                          </Typography>
                        </div>
                
                
                      </div>
                    </CardContent>
                    <CardActions className='caixa-btn'>
                      <Box display="flex" justifyContent="center" mb={1.5}>
                        <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none " >
                          <Box mx={1}>
                            <Button variant="contained" className="marginLeft pintarBtn " size='small'  >
                              atualizar
                            </Button>
                          </Box>
                        </Link>
                        <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none ">
                          <Box mx={1}>
                            <Button variant="contained" className="pintarBtn2" size='small' >
                              deletar
                            </Button>
                          </Box>
                        </Link>
                      </Box>
                    </CardActions>
                  </Card>
                </Box>
          ))
        }
        </Grid>
    </Grid>
    </>
  )
}

export default ListaPostagem;