import React, {useState} from "react";
import { AppBar, Tab, Tabs, Typography, Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listaPostagem/ListaPostagem";
import './TabPostagem.css'
import SobreNos from '../../../paginas/sobrenos/Sobrenos';


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
                
                <SobreNos />
                
            </TabPanel>
        </TabContext>
        
        </>



    );

}

export default TabPostagem;