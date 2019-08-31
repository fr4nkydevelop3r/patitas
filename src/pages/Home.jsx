import React from 'react';
import useGetPets from '../hooks/index';
import PetItem from '../components/PetItem';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const API = 'https://us-central1-patitas-f4252.cloudfunctions.net/api';
    const pets = useGetPets(API);
    console.log(pets);
    
    return(
        <div className='Home'>
            <div className='Home-container'>
                <div className='Home-items'>

                    {pets.map((pet, index) => 
                        
                        <Link to={{
                            pathname: `/mascotas/${index}-${pet.name}`,
                            state: { ...pet }
                        }}
                        key={index}>
                            <PetItem pet={pet} key = {`pet-${index}`}  />     
                        </Link>
                           
                    )}

                </div>
            </div>
        </div>
    )
};

export default Home;