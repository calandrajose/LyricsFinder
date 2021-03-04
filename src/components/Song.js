import React, { Fragment } from 'react';

const Song = ({lyrics}) =>{
    if(!lyrics)return null

    return(
<Fragment>
    <h2>Letra</h2>
    <p className='lyric'>{lyrics}</p>
</Fragment>
    );
}

export default Song;