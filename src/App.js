import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Song from './components/Song'
import Info from './components/Info'
import Error from './components/Error'
import Spinner from './components/Spinner'
import { toggleState } from './utility'

function App() {
  const [params, setParams] = useState({});
  const [lyrics, setLyrics] = useState('');
  const [artistData, setArtistData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(params).length === 0) return
    const fetchAPI = async () => {
      const songUrl = `https://api.lyrics.ovh/v1/${params.artist}/${params.song}`;
      const artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${params.artist}`;
      try {
        const [lyricsResult, artistResult] = await Promise.all([
          axios(songUrl, { timeout: 10000 }),
          axios(artistUrl, { timeout: 10000 })
        ])
        setLyrics(lyricsResult.data.lyrics);
        setArtistData(artistResult.data.artists[0]);
      } catch {
        setLyrics('');
        setArtistData({});
        toggleState(3000, setError)
      }
    }
    setLoading(true);
    fetchAPI();
  }, [params])

  useEffect(() => {
    setLoading(false)
  }, [artistData, lyrics, error])

  return (
    <Fragment>
      <Form
        setParams={setParams}
      />
      {error ? <Error message='No se encuentran resultados para su busqueda. Recargue la pagina e intente nuevamente' /> : null}
      <div className='container mt-5'>
        <div className='row'>
          {loading ? <Spinner /> : 
          <Fragment>
          <div className='col-md-6'>
            <Info info={artistData} />
          </div>
          <div className='col-md-6'>
            <Song lyrics={lyrics} />
          </div>
          </Fragment>}
          {/* <div className='col-md-6'>
            <Info info={artistData} />
          </div>
          <div className='col-md-6'>
            <Song lyrics={lyrics} />
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
