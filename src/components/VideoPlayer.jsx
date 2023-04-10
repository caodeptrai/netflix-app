import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer() {
  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      controls: 1
    },
    allowFullScreen: true
  };

  return (
    <div>
      <YouTube videoId="pNX5GBTlc70" opts={opts} />
    </div>
  );
}

export default VideoPlayer;