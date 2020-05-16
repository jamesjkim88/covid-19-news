/*

This container will create the Videos for VideoLlist to hold and render

*/


import React from 'react';
import Video from './Video';

const VideoList = (props) => {



  const vidComp = props.videos.map((elm, i) => {
    return(
      <Video 
        key={i}
        thumbnail={elm.snippet.thumbnails.medium.url}
        title={elm.snippet.title}
        channelTitle={elm.snippet.channelTitle}
        pubDate={elm.snippet.publishedAt}
        vidLink={elm.id.videoId}
        channelLink={elm.snippet.channelId}
        getModVidLink={props.getModVidLink}
      />
    )
  });
  return(
    <div className='video-list eight wide column fr w-60'>
      <div className="ui cards">{vidComp}</div>
    </div>
  )
}

export default VideoList;
