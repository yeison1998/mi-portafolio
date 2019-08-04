import React from 'react';
import Estudios from '../assets/img/estudios.jpg';

class Skills extends React.Component {
    render() {
        return (
            <section id="estudios">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 " >
                            <img className="imgs"  src={Estudios} alt="estudios" className="imgs"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
                            <div className="center">
                            <h2>Estudios</h2>
                            <p>Tecnico en desarrollo de software. <br/> Sena </p>
                            <p>Media tecnica en telecomunicaciones. <br/> Cisco Systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Skills;