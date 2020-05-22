

import React, { Component } from 'react';

class VideoModal extends Component {
  constructor(props){
    super(props)
    this.divRef = React.createRef();
    this.iframeRef = React.createRef();
  }

  state = {
    playerState: Number
  }


  playVideo = () => {
    console.log();
  }

  closeModal = () => {
    this.divRef.current.style.display = "none";
  }
  
  iframeStyles = {
    width: "640px",
    height: "390px"
  }


  render() {
    return(
      <div ref={this.divRef} className="video-modal" onClick={this.closeModal}>
        <iframe id="player" ref={this.iframeRef} title="video" src={this.props.modVidUrl} style={this.iframeStyles} frameBorder="0"></iframe>
      </div>
    )
  }
}

export default VideoModal;
// <iframe title="video" src={this.props.modVidUrl} style={this.iframeStyles}></iframe>