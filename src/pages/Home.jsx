import React from 'react';


const Home = () => (
    <div className='Home'>
        <div className='Home-container'>
            <div className='Home-items'>

                <div className='Pets'>
                    <div className='Pets-cover'>
                        <span>&#128054;</span>
                        <div className='Pets-type'>
                            Adopcion
                        </div>
                    </div>
                    <div className='Pets-content'>
                        <div className='Pets-head'>
                            <h2>Nombre de mi mascota</h2>
                            <i>&#9794;</i>
                        </div> 
                        <div className='Pets-date'>
                            <i>icono</i>
                            <span>Fecha</span>
                        </div>       
                    </div>
                </div>

            </div>
        </div>
    </div>
);

export default Home;