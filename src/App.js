import './App.css';
import AppBarWithNavAndDropdown from './components/barra/barra';
import AppBarFoot from './components/barrafoot/barrafoot';
import AppBarG from './components/barragames/barragames';

// import ImageButton from './components/imagenesboton/imagenesbtn';
// import imglol from './components/imagenesboton/img/lolline.png';
// import imgtft from './components/imagenesboton/img/tftline.png';
// import imgval from './components/imagenesboton/img/valoline.png';
import './components/imagenesboton/style/imagenesbtn.css';

import MultiActionAreaCardtres from './components/imagenesboton/imagenesbtn';

function App() {

  return (
    <>
<link href="https://fonts.cdnfonts.com/css/cormorant-sc" rel="stylesheet"></link>

<div className="app-container">
 <header>
  <AppBarWithNavAndDropdown />
 </header> 
 
 <br />
 <br />
 <center className='centerarriba'> La pasión por la victoria nos inspira a ser leyendas</center>
 <br />
 <br />
 
 <div>
  <AppBarG />
 </div>
<br />
<br />
<br />

<div>
  
{/* <img src={imglol} alt="Descripción de la imagen" />
<img src={imgtft} alt="Descripción de la imagen" />
<img src={imgval} alt="Descripción de la imagen" /> */}

<MultiActionAreaCardtres />
</div>

</div>


<main className="main-content">
</main>

<br />
<br />
<br />

<footer>
 <AppBarFoot />
 <p><center>COPYRIGHT @ 2023 Valgala Legacy </center></p>
</footer>

</>
  );
}

export default App;

