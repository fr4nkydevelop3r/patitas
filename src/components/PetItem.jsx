import React from 'react';
import moment from 'moment';

const PetItem = props => {

    console.log(props);

    const date  = moment(props.pet.date, 'YYYYMMDD').fromNow();

    return(
        <div className='Pets'>
            <div 
                className='Pets-cover'
                style={{
                    background: `url('${props.pet.photo}')`
                }}
            >
                <span>
                
                    {props.pet.type === 'dog' && '\u{1F436}'}
                    {props.pet.type === 'cat' && '\u{1F431}'}
                </span>
                {props.pet.adopt === true &&
                    <div className='Pets-type'>
                    Adopcion
                </div>
                }
                {props.pet.adopt === false &&
                    <div className='Pets-type'>
                    Cuidar
                </div>
                }
                
            </div>
            <div className='Pets-content'>
                <div className='Pets-head'>
                    <h2>{props.pet.name}</h2>
                    <i>
                        {props.pet.gender === 'male' && '\u{2642}'}
                        {props.pet.gender === 'female' && '\u{2640}'}
                    </i>
                </div> 
                <p>{props.pet.description}</p>
                <div className='Pets-date'>
                    <i className="fas fa-calendar-alt" />
                    <span>{date}</span>
                </div>       
            </div>
        </div>
    )
};

export default PetItem;