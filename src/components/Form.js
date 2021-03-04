import React, { useState } from 'react';
import { validateInput, toggleState } from '../utility'
import Error from './Error'

const Form = ({ setParams }) => {
    const [input, setInput] = useState({
        artist: '',
        song: ''
    });
    const [error, setError] = useState(false)

    const onChangeHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (!validateInput(input.artist) || !validateInput(input.song)) {
            toggleState(1500, setError);
            return
        }
        setParams(input)
    }

    return (
        <div className='bg-info'>
            <div className='container'>
                <div className='row'>
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={onSubmitHandler}
                    >
                        <fieldset>
                            <legend className='text-center'>Buscador de Letras de Canciones</legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='artist'
                                            placeholder='Artista'
                                            onChange={onChangeHandler} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Cancion</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='song'
                                            placeholder='Artista'
                                            onChange={onChangeHandler} />
                                    </div>
                                </div>
                            </div>
                            {error ? <Error message='Ambos campos deben ser completados' /> : null}
                            <button
                                type='submit'
                                className='btn btn-primary float-right'>Buscar</button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Form;