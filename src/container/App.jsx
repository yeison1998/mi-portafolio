import React from 'react';
import '../components/style/index.css'
import Menu from '../components/menu';
import Cabecera from '../components/cabecera';
import Habilidades from '../components/habilidades'
import Hobbies from '../components/hobbies';
import Contacto from '../components/contacto';
import Estudios from '../components/estudios';
import Experiencia from '../components/experiencia';

class App extends React.Component {
  render() {
    return (
      <div>

        <Menu />
        <Cabecera />
        <Habilidades/>
        <Estudios/>
        <Experiencia/>
        <Hobbies />
        <Contacto/>
      </div>

    );
  }
}

export default App;