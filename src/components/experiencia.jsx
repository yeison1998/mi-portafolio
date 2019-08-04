import React from 'react';
import Experiencia from '../assets/img/experiencia.jpg';

class Skills extends React.Component {
    render() {
        return (
            <section id="experiencia">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 my-auto ">
                            <h2>Experiencia</h2>
                            <p>TATA Consultancy Services <br />
                                Enero 2019-Julio 2019 <br />
                                Mantenimiento a la intranet de Banistmo <br />
                                Actualizaciones en la interface de nequi</p>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12  ">
                            <img className="imgs" src={Experiencia} alt="Experiencia" />
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default Skills;