import React from 'react';
import med1 from '../assets/img/IMG_20.jpg';
import med2 from '../assets/img/IMG-21.jpg';
import med3 from '../assets/img/IMG-22.jpg';
import med4 from '../assets/img/Mama.jpg';


class Cabecera extends React.Component {
    render() {
        return (

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="item active">
                        <img className="imgCarousel" src={med1} alt="No cambies tu esencia" />
                    </div>
                    <div className="item">
                        <img className="imgCarousel" src={med2} alt="Familia" />
                    </div>
                    <div className="item">
                        <img className="imgCarousel" src={med3} alt="Mamá" />
                    </div>
                    <div className="item" >
                        <img className="imgCarousel" src={med4} alt="Mamá" />
                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Siguiente</span>
                </a>
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 offset-md-6 text-center text-md-right" >
                                <div id="main">
                                    <h1 >Acerca de mi</h1>
                                    <p>Soy una persona que quiero estar
                                    en constante aprendizaje para crecer profesionalmente y desarrollar
                                    otras habilidades que me puedan facilitar mi trabajo en el día a día.<br /> Tiendo a desarrollar mis
                                    metas de forma responsable y eficaz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cabecera;