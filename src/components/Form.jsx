import React from 'react';
import { storage, database } from '../utils/firebase';
import { ECONNRESET } from 'constants';

const Form = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = new FormData(event.target);
        const newDate = new Date().toISOString();

        const data = {
            'adopt': form.get('adopt'),
            'date': newDate,
            'description': form.get('description'),
            'gender': form.get('gender'),
            'name': form.get('name'),
            'photo': '',
            'profilePic': '',
            'type': form.get('type'),
            'userContact': '',
            'userName': ''
        }

        database.ref('pets').push(data)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    
    const onChange = event => {
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name = (+new Date()) + '-' + file.name;
        const uploadFile = storageRef.child(name).put(file);
        uploadFile
            .then((snapshot) => {
                snapshot.ref.getDownloadURL()
                    .then(downloadURL => console.log(downloadURL));
            })
    }

    return(
        <div className='Form'>
            <div className='Form-header'>
                <h2>Dar en adopcion</h2>
            </div>
            <div className='Form-item'>
                <form onSubmit={handleSubmit}>
                    <input name='name' type='text' placeholder='Nombre de tu mascota' />
                    <input name='description' type='text' placeholder='Describe tu mascota' />
                    <select name='type'>
                        <option disabled selected>Seleccionar</option>
                        <option value='cat'>Gato</option>
                        <option value='dog'>Perro</option>
                    </select>
                    <select name='gender'>
                        <option disabled selected>Seleccionar</option>
                        <option value='male'>Macho</option>
                        <option value='female'>Hembra</option>
                    </select>
                    <select name='adopt'>
                        <option disabled selected>Seleccionar</option>
                        <option value='true'>Dar en adopcion</option>
                        <option value='false'>Cuidar</option>
                    </select>
                    <input type='file' onChange={onChange} name='photo'  />
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Form;