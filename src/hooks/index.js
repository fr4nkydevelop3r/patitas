import { useState, useEffect } from 'react';

const useGetPets = (url) => {
    const [pets, setPets] = useState([]);
    //const [estado, funcionActualiza] = useState(EstadoInicial)
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPets(data));
    }, [])

    return pets;
}

export default useGetPets;