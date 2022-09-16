import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TokenState} from '../../store/tokens/tokensReducer'
import User from '../../models/User'
import { buscaId } from '../../service/Service'
import './Perfil.css'

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
                src="https://e7.pngegg.com/pngimages/250/541/png-clipart-computer-application-icon-computer-technology-green-actions-im-msn-computer-wallpaper-microsoft.png" alt='' width="150px" height="150px"/>
                </Box>
                <Box>
                    <h1>{ user.nome }</h1>
                    <hr />
                    <p>{user.login}</p>
                </Box>

                <p className='card-container-texto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam accusantium totam incidunt architecto maiores, perferendis eius. Tempora ullam magni dolore voluptatibus, quidem sunt tempore distinctio ut aliquam modi aliquid officiis.
                    Assumenda voluptatibus, animi pariatur voluptatum magnam ullam aspernatur optio suscipit incidunt dolor modi quos aperiam. Quam possimus rerum iste nobis quas porro unde sequi, sed nisi labore est voluptas corrupti.
                    Deleniti officiis sint perspiciatis nisi iste, voluptate sunt asperiores dolor sapiente non corporis omnis voluptatem soluta. Nulla odio alias aperiam, magnam eaque assumenda tempora! Inventore odit iure unde placeat iste.
                </p>

                <p className='card-container-texto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur tempore en
                </p>
            </Box>
        </Box>
    )
}

export default Perfil;