import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'
import Card from './Components/Card';
import Footer from './Components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  


  return (
    <><div className="App container">
      <div className="tcolor">
      <Header
        subtitle="Aprendiendo desde 0"
        title="Galeria de Imagenes con React" />
      </div>
    <div className='grid'>
      <Card
        title="KissLand"
        desc="Primer Album de Estudio de The Weeknd"
        photo="https://i.discogs.com/Aib4iZ-CwlscymEnOcqTZaZ0Hmfh0uNvgTAE5YXCh-4/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MTQy/Njg4LTE1ODcyMzE4/MTItNDA2OS5qcGVn.jpeg">
      </Card>

      <Card
        title="After Hours"
        desc="Album con mas reproducciones de The Weeknd"
        photo="https://i0.wp.com/lighthouse.lyndhurstschools.net/wp-content/uploads/2020/06/Weeknd-Featured-Image-3.jpg?resize=600%2C601&ssl=1">
      </Card>

      <Card
        title="Dawn FM"
        desc="Ultimo album de The Weeknd"
        photo="https://upload.wikimedia.org/wikipedia/en/b/b9/The_Weeknd_-_Dawn_FM.png">
      </Card>

    </div>
  </div><Footer desc="Click al Boton para ver la Discorgrafia"> </Footer></>
  );
}

export default App;
