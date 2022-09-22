import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TokenState} from '../../store/tokens/tokensReducer'
import User from '../../models/User'
import { buscaId } from '../../service/Service'
import './Perfil.css'
import FotoPerfil from '../../imagens/logo-favicon.png'

function Perfil() {

    let history = useNavigate()

    const id = useSelector<TokenState, TokenState["id"]>(
        (state) => state.id
    );

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    
        nome: '',
        login:'',
        senha: '',
        usuario: '',   
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])

    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
            console.log(user)
        }
    }, [id])

    return (
        <Box className='card-principal'>
            

            <Box className='card-container-info'>
                <Box className='card-container-imagem'>
                 <img className='card-imagem'
                src={FotoPerfil} alt='' width="150px" height="150px"/>
                </Box>
                <Box>
                    <h1>{ user.nome }</h1>
                    <hr />
                </Box>
                <h4>
                    Descrição 
                </h4>
                <p className='card-container-texto'>
                Nós do grupo 1, propomos a construir um blog onde será publicado links de instituições do âmbito político 
                para auxiliar as pessoas com informações atualizadas e verídicas 
                e também com espaço para divulgação de diversas ongs com trabalho relevante para o desenvolvimento sustentável.
                </p>

                <p className='card-container-texto'>
                   
                </p>
            </Box>
        </Box>
    )
}

export default Perfil;