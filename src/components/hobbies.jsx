import React from 'react';
import tesoro from '../assets/img/logoShadow.jpg';

class Hobbies extends React.Component {
    render() {
        return (
            <section >
                <div className="container-fluid" id="hobbies">
                    <div className="row">
                        <div className="col-12 col-lg-6 pl-0 pr-0">
                            <img src={tesoro} alt="El Tesoro" className="imgs"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 my-auto ">
                            <div className="center">
                                <h2>Hobbies</h2>
                                <p>Viajar Conduciendo</p>
                                <p>Pasar con mi familia,amigos y pareja</p>
                                <p>Trabajar</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
export default Hobbies;