/*

This container will hold the Video(s) from Video container

*/

import React from 'react';

//  const embedVidLink = `https://www.youtube.com/embed/${props.vidLink}`; const embedVidLink = props.vidLink;
const Video = (props) => {
  const embedVidLink = `https://www.youtube.com/embed/${props.vidLink}`;
  const channelLink = `https://www.youtube.com/channel/${props.channelLink}`;
  let pubDate = new Date(props.pubDate);
  const pubLocalFormat = pubDate.toLocaleDateString();
  const pubLocalTime = pubDate.toLocaleTimeString();

  const modalOpen = () => {
    document.querySelector('.video-modal').style.display = 'flex';
    document.querySelector('.video-modal').style.top = `${window.scrollY}px`;
    props.getModVidLink(embedVidLink);
  }

  const timeAndDate = ((pubDate) => {
    const date = new Date();
    let diff = (pubDate.getTime() - date.getTime()) / 1000;
    diff /= (60*60);
    return Math.abs(Math.round(diff));
  })(pubDate);

  const decodeHtml = ((html) => {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  })(props.title)

  return(
    <div className="video ui card v-top grow" id={`video-${props.vidLink}`}>
      <p className="content"><a href={channelLink}>{props.channelTitle}</a></p>
      <div className="modal-open image" id={`tb-${props.vidLink}`} onClick={modalOpen}><img src={props.thumbnail} alt=""/></div>
      <div className="modal-open content" id={`title-${props.vidLink}`} onClick={modalOpen}><p>{decodeHtml}</p></div>
      <p className="content">{pubLocalFormat} - {pubLocalTime}</p>
    </div>

  )
}
export default Video;

/*
let hoursAgo = (date) => {
  date = new Date(date);
  // new date minus the posted date
  let newDate = new Date();
  let diff = (newDate.getTime() - date.getTime()) / 1000;
  diff /= (60*60);
  return Math.abs(Math.round(diff));
};



*/
