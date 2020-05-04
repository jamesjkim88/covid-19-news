import React from 'react';
import VideoList from '../Components/VideoList';
import DataPanel from '../Components/DataPanel';

const Content = (props) => {
  return(
    <div className="content">
    <DataPanel data="2,790,988"/>
    <VideoList videos={this.state.vids.items} getModVidLink={this.getModVidLink} />
  </div>
  )
};

export default Content;