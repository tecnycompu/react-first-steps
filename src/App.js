import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis desarrolladores favoritos son</h1>
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='https://www.linkedin.com/in/braismoure/'
        youtube='https://www.linkedin.com/in/braismoure/'
        twitter='https://www.linkedin.com/in/braismoure/'
      />
      <Perfil 
        nombre='Facundo'
        pais='España'
        imagen='facundo'
        cargo='Ingeniero de Software'
        empresa='facundo'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='https://www.linkedin.com/in/braismoure/'
        youtube='https://www.youtube.com/@tigremartoni'
        twitter='https://www.twitch.tv/facmartoni'
      />
      <Perfil 
        nombre='MiduDev'
        pais='Barcelona'
        imagen='minudev'
        cargo='Ingeniero de Software'
        empresa='minudev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software Minudev, javascript, react, css, html, web y frontend'
        linkedin='https://es.linkedin.com/company/midudev'
        youtube='https://www.youtube.com/c/midudev'
        twitter='https://twitter.com/midudev?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
      />

     </div>
    </div>
  );
}

export default App;