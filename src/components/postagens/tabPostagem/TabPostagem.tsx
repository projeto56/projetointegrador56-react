import React, {useState} from "react";
import { AppBar, Tab, Tabs, Typography, Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listaPostagem/ListaPostagem";
import './TabPostagem.css'
import SobreNos from '../../../paginas/sobrenos/Sobrenos'

function TabPostagem () {
    const [value, setValue] = useState('1')

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
      setValue(newValue);  
    }

    return (
        <>
        <TabContext value={value}>
            <AppBar position="static" className="faixa-postagem">
                <Tabs centered indicatorColor="secondary" onChange={handleChange} >
                    <Tab className='label' label= "Todas as Postagens" value="1"/>
                    <Tab  label="Sobre Nós" value="2" />
                </Tabs>
            </AppBar>
            <TabPanel value="1">
                <Box display="flex" flexWrap="wrap" justifyContent="center" className='posts'>
                    <ListaPostagem />
                </Box>
            </TabPanel>
            <TabPanel value="2">
                
                <div className="texto-sobre">
                    <Typography variant="body1" color="textPrimary"   className="titulo">Nós do grupo 1, nos propomos a construir um blog onde será publicado links de instituições do âmbito político para auxiliar as pessoas com informações atualizadas e verídicas e também com espaço para divulgação de diversas ongs com trabalho relevante para o desenvolvimento sustentável.</Typography>
                    <Typography variant="body1" color="textPrimary"   className="titulo">
                    Nosso site te o intuito de informar as pessoas sobre as principais atribuições das instituições públicas do Brasil, descrever o papel de cada cargo político na administração pública e divulgar ongs que trabalham para reduzir violências.
                    </Typography>
                    <Typography variant="body1" color="textPrimary"   className="titulo">
                    Buscamos assim, ajudar a população com informações relevantes sobre a politica nacional e projetos sociais: área de atuação, formas de financiamento, exposição dos sites institucionais.
                    </Typography>
                </div>
                
            </TabPanel>
        </TabContext>
        
        </>



    );

}

export default TabPostagem;