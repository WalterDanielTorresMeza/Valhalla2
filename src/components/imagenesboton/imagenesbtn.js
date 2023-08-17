import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'; // Import Grid from MUI
import './style/imagenesbtn.css';

import imglol from './img/lolline.png';
import imgtft from './img/tftline.png';
import imgval from './img/valoline.png';
import iconval from './img/CValhallaLegacy1.png';


const cliclol = () => {
  window.open('https://na.g2esports.com/blogs/teams/league-of-legends', '_blank');
 };
 const clictft = () => {
  window.open('https://www.estral.gg/rosters', '_blank');
 };
 const clicvalo = () => {
  window.open('https://na.g2esports.com/blogs/teams/gozen', '_blank');
 };


export default function MultiActionAreaCardtres() {
  return (
    <div 
      style={{
        background: '#212121',
        padding: '20px',
        maxWidth: '1100px',
        margin: '0 auto',
      }} 
    >
      <link href="https://fonts.cdnfonts.com/css/cormorant-sc" rel="stylesheet"></link>
      <Typography variant="h4" style={{ color: 'white', marginBottom: '20px' }} >
      <center> <div className='letrasg'><img src={iconval} alt="Custom Icon" style={{ width: '40px' }} /> <p>Valhalla Legacy</p> <p className='letrasgd'>Escuadras</p> </div> </center>
      </Typography>

      <Divider style={{ width: '100%', marginBottom: '20px', background: '#FDFEFE' }} />

      <Grid container spacing={12} justifyContent="center"> {/* Use Grid container */}
        <Grid item xs={10} sm={4} md={3.1}> {/* Adjust item sizes for different screen sizes */}
          <Card className="image-cardgm">
            <CardActionArea onClick={cliclol}>
              <CardMedia component="img" image={imglol} alt="LOL" />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={10} sm={4} md={3.1}>
          <Card className='image-cardgm'>
            <CardActionArea onClick={clictft}>
              <CardMedia component="img" image={imgtft} alt="TFT" />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={10} sm={4} md={3.1}>
          <Card className='image-cardgm'>
            <CardActionArea onClick={clicvalo}>
              <CardMedia component="img" image={imgval} alt="VALO" />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Divider style={{ width: '100%', marginTop: '20px', background: '#FDFEFE' }} />
    </div>
  );
}
