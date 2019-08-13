import React from 'react';
import contacto from '../assets/img/contacto.png';


class Skills extends React.Component {
    render() {
        return (
            <section id="contacto">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-lg-6 pt-4 pb-4 ">
                            <h2>Contacto</h2>
                            <p>Medellin, Colombia</p>
                            <p>ypareja1998@gmail.com</p>
                            <p>3205797870</p>
                            <p><a href="https://www.linkedin.com/in/yeison-pareja-6809a718a/" target="_blank" >linkedin</a></p>
                            <p><a href="https://twitter.com/yeison_pareja" target="_blank"  > Twitter</a></p>
                        </div>
                        <div className="col-12 col-lg-6 pl-0 pr-0">
                            <img className="imgCon" src={contacto} alt="Contacto" className="imgs"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Skills;