import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import './style/barragames.css'; // Importa tus estilos CSS

import lolicon from './img/loln.png';
import vicon from './img/vn.png';
import tfticon from './img/tftn.png';

const AppBarG = () => {
  return (
    <div>
      <AppBar position="static" className="bottom-app-barg" sx={{ boxShadow: '6px 12px 10px rgba(0, 0, 0, 0.2), 6px -12px 10px rgba(0, 0, 0, 0.2)' }}>
     
         <Toolbar className="toolbarg"> 
         <img src={lolicon} alt="Custom Icon"  />
         <img src={tfticon} alt="Custom Icon"  />
         <img src={vicon} alt="Custom Icon"  />
         </Toolbar>

         
      </AppBar>
    </div>
  );
};

export default AppBarG;
