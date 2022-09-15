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
                    <Tab label= "Todas as Postagens" value="1"/>
                    <Tab  label="Sobre Nós" value="2" />
                </Tabs>
            </AppBar>
            <TabPanel value="1">
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    <ListaPostagem />
                </Box>
            </TabPanel>
            <TabPanel value="2">
                <Typography variant="body1" color="textPrimary"  align="center" className="titulo">Somos uma organização sem fins lucrativos que objetiva bla blabla Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt porro ducimus molestiae voluptatem neque tempore unde consequatur corrupti laboriosam veniam ipsa repudiandae similique dignissimos, voluptatibus magnam obcaecati mollitia ipsam.</Typography>
                
            </TabPanel>
        </TabContext>
        
        </>



    );

}

export default TabPostagem;