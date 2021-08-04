import React, { useState } from 'react';
import Sound from 'react-sound';
import backgroundMusic from '../Outkast.mp3';
import { Link } from 'react-router-dom';

const PlaySong = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
  ) => { 
    const [isPlaying, setIsPlaying] = useState(false);
    console.log("SongStatus:", isPlaying)

    return(
    <div>
        <Link  id="welcome" onClick={() => setIsPlaying(!isPlaying)}>Rolltide</Link>
    <Sound id="welcome"
    url={backgroundMusic}
    playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
    playFromPosition={300}
    onLoading={handleSongLoading}
    onPlaying={handleSongPlaying}
    onFinishedPlaying={handleSongFinishedPlaying}
    >Rolltide</Sound>
  </div>
  );
  }
  
  export default PlaySong;