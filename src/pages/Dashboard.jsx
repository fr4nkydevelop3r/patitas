import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../utils/firebase';
import { setUser, setLogin } from '../actions/index';
import Form from '../components/Form';


const Dashboard = props => { 


    const logoutFacebook = () => {
        auth().signOut()
            .then(() => {
                props.setUser({});
                props.setLogin(false);
                console.log(props);
                props.history.push('/');
            })
    }


            if(props.user){
                console.log(props.user);
            }


        return !props.user ? <div>Cargando..</div> :
            
            
            <div className='Dashboard'>
                <div className='Dashboard-container'>
                    <div className='Dashboard-content'>
                        <div className='Dashboard-form'>
                            <Form />
                        </div>
                        <div className='Dashboard-profile'>
                            <h2>Perfil</h2>
                            <div className='Dashboard-profile-info'>
                                <div>
                                   <img src={props.user.photoURL} alt={props.user.displayName} /> 
                                    <div>
                                        <span>Nombre:</span>
                                     {   <h4>{ props.user.displayName}</h4> }
                                        <span>Correo:</span>
                                       { <h4>{props.user.email}</h4> }
                                        <button onClick={logoutFacebook}>cerrar sesion</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    


}

const mapDispatchToProps = {
    setUser,
    setLogin,
}

const mapStateToProps = state => {
    //console.log(state.user);
    return {
        user: state.user, 
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);