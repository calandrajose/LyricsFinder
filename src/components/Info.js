import React, { Fragment } from 'react';

const Info = ({ info }) => {

    if (Object.keys(info).length === 0) return null

    const artist = {
        name: info.strArtist,
        info: info.strBiographyES,
        fb: info.strFacebook,
        tw: info.strTwitter,
        lastChart: info.strLastFMChart,
        image: info.strArtistThumb,
        genre: info.strGenre
    }

    return (
        <div className='card border-light'>
            <div className='card-header bg-primary text-light font-weight-bold'>
              {artist.name}
            </div>
            <div className='card-body'>
                <img src={artist.image} alt='imagen artista'></img>
                <p className='card-text'>Genero: {artist.genre}</p>
                <p className='card-text'>Biografia:</p>
                <p className='card-text'>{artist.info}</p>
                <p className='card-text'>
                    <a href={`https://${artist.fb}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${artist.tw}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${artist.lastChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Info;