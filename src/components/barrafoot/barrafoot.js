import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import {  BsTwitter, BsTwitch,BsInstagram, BsYoutube, BsFacebook, BsTiktok } from "react-icons/bs";

import './style/barrafoot.css'; // Importa tus estilos CSS


const clictwitter = () => {
  window.open('https://twitter.com/ValhallaLegacy7', '_blank');
 };

 const clicfacebook = () => {
  window.open('https://www.facebook.com/profile.php?id=61550509739744', '_blank');
 };
 const clicyoutube = () => {
  window.open('https://youtube.com/@ValhallaLegacy7', '_blank');
 };
 const clicinstagram = () => {
  window.open('https://www.instagram.com/valhallalegacy7/', '_blank');
 };
 const clictwitch = () => {
  window.open('https://www.twitch.tv/valhallalegacy7', '_blank');
 };
 const clictiktok = () => {
  window.open('https://www.tiktok.com/@valhallalegacy7', '_blank');
 };

const AppBarFoot = () => {
  return (
    <div>
      <AppBar position="static" className="bottom-app-bar" >
        

         <Toolbar className="toolbar"> 
         <BsTwitter className='iconfot' onClick={clictwitter} />
         <BsFacebook className='iconfot' onClick={clicfacebook} />
         <BsYoutube className='iconfot' onClick={clicyoutube} />
         <BsInstagram className='iconfot' onClick={clicinstagram} />
         <BsTwitch className='iconfot' onClick={clictwitch} />
         <BsTiktok className='iconfot' onClick={clictiktok} />
         {/* <BsDiscord /> */}
         </Toolbar>

        
      </AppBar>
    </div>
  );
};

export default AppBarFoot;
