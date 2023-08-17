import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MyCustomIcon from '../barra/img/CValhallaLegacy1.png';
import './style/barra.css'; // Importa tus estilos CSS




const AppBarWithNavAndDropdown = () => {
  return (
    <div>

      <link href="https://fonts.cdnfonts.com/css/cormorant-sc" rel="stylesheet"></link>
      <AppBar position="static" sx={{ boxShadow: '6px 12px 10px #ABB2B9' }}>
        
        <div className="app-bar-content">
         <Toolbar> 
         <nav> 

          <img src={MyCustomIcon} alt="Custom Icon"  />

          </nav>
           <Typography variant="h6" component="div" >
            <div className='letras-iconos'>Valhalla Legacy</div>
            
           </Typography>
         </Toolbar>
        <div className="button-container">
          
      
          <Button color="inherit" className='letras'  >Acerca</Button>
        
          <Button color="inherit" className='letras'>Equipos</Button>
          <Button color="inherit" className='letras'>Redes</Button>
          <Button color="inherit" className='letras'>Socios</Button>
          </div>
        </div>
        
      </AppBar>
    </div>
  );
};

export default AppBarWithNavAndDropdown;
