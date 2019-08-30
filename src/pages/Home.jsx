import React from 'react';
import useGetPets from '../hooks/index';
import PetItem from '../components/PetItem';

const Home = () => {
    
    const API = 'https://us-central1-patitas-f4252.cloudfunctions.net/api';
    const pets = useGetPets(API);
    console.log(pets);
    
    return(
        <div className='Home'>
            <div className='Home-container'>
                <div className='Home-items'>

                    {pets.map((pet, index) => 
                        <PetItem 
                            key = {`pet-${index}`}
                            pet={pet}
                        />    
                    )}

                </div>
            </div>
        </div>
    )
};

export default Home;