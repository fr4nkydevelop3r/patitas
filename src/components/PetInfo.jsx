import React from 'react';
import { connect } from 'react-redux';

const PetInfo = props => {

    console.log(props);

    return(
        <div className='PetInfo'>
            <div className='PetInfo-container'>
                <div className='PetInfo-content'>
                    <div className='PetInfo-avatar'>
                        <img src={props.pet.photo} alt={props.pet.name} />        
                    </div>
                    <div className='PetInfo-profile'>
                        <h2>{props.pet.name}</h2>
                        <span>
                            {props.pet.type === 'dog' && '\u{1F436}'}
                            {props.pet.type === 'cat' && '\u{1F431}'}
                        </span>
                        <p>{props.pet.description}
                            <i>
                                {props.pet.gender === 'male' && '\u{2642}'}
                                {props.pet.gender === 'female' && '\u{2640}'}
                            </i>
                        </p>

                        <div className='PetInfo-type'>
                            <button>
                                Adoptar
                            </button>
                        </div>
                        <div className="PetInfo-profile-adopt">
                            <div className='PetInfo-item'>
                               <h3>Datos de contacto</h3>
                                <span>Owner:</span>
                                <h4>{props.user.displayName}</h4>
                                <span>Correo:</span>
                               <h4>{props.user.email}</h4> 
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    //console.log(state);
    return {
        user : state.user,
    }
}


export default connect(mapStateToProps)(PetInfo);