import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroPostagem() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            ong: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        subTitulo:'',
        autor:'',
        conteudo:'',
        data: '',
        foto:'',
        tema: null
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso', {
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
            console.log(postagem)
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso', {
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
        back()

    }

    function back() {
        navigate('/posts')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h4" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>

                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />

                <TextField value={postagem.autor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="autor" label="autor" name="autor" variant="outlined" margin="normal" fullWidth />
                
                <TextField value={postagem.subTitulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="subTitulo" label="fonte" name="subTitulo" variant="outlined" margin="normal" fullWidth />

                <TextField value={postagem.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="foto" label="Insira a URL da foto (opcional)" name="foto" variant="outlined" margin="normal" fullWidth />

                <TextField value={postagem.conteudo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="conteudo" label="Mínimo 100 caracteres" multiline rows={2} name="conteudo" variant="outlined" margin="normal" fullWidth />
               

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.ong}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary" className='btn'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPostagem;