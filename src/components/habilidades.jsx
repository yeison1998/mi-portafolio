import React from 'react';
import Habilidades from '../assets/img/habilidades.png';

class Skills extends React.Component {
    render() {
        return (
            <section id="skills">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-auto">
                            <div className="center">
                                <h2>Habilidades</h2>
                                <p>Trabajo en equipo.</p>
                                <p>Arriesgado.</p>
                                <p>Empatico. </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <img className="img-fluid" src={Habilidades} alt="Habilidades" />
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default Skills;