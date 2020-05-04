import React, { Component } from 'react';
import '../App.css';
import MenuBar from '../Components/MenuBar';
import VideoList from '../Components/VideoList';
import VideoModal from '../Components/VideoModal';
import DataPanel from '../Components/DataPanel';
//import ContentContainer from '../Components/ContentContainer';
import config from '../config.js';
import axios from 'axios';
import 'tachyons';

 /*


TODO:
  - **date and time format**
    - time format seconds ago, minutes ago, hours ago, days ago, weeks ago, months ago, years ago
  - **add filter functionaility to the menu bar**
    - do more testing for bugs
  - **scraping for number data from jhu**

  - *scroll lock the page when modal is on* CSS
  - *look deeper into the api for better search results*
  - *update card height to match all*

  - get each component (data panel, and video list) their own scroll
  - side panel of data for covid-19 HTML/CSS
  - resuable TitleHeader component
    - props
      - font size, what the title is, ...

*****************************
*****THIS ANNOYING SHIT******
*****************************  
  - **add/update video modal functionality**
    - setup api events... look into player state and use that into react state

      onYouTubeIframeAPIReady = () => {
    this.player = new window.YT.Player('player', {
      height: '390',
      width: '640',
      videoId: this.props.modVidId
    });
    console.log(this.player); 
  };
*****************************
*****THIS ANNOYING SHIT******
*****************************


*/

let apiURL = 'https://www.googleapis.com/youtube/v3/search';
let params = '?part=snippet&maxResults=50&order=date&q=coronavirus%20news&relevanceLanguage=en&key=${config}';
const defaultQ = "coronavirus covid-19 news";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vids: [],
      modVidLink: '',
      q: ''
    }
  }

  getData = async (term) => {
    const resp = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 50,
        order: 'date',
        q: `${defaultQ} ${term}`,
        relevanceLanguage: 'en',
        key: config
      }
    });
    this.setState({ vids: resp.data });
  };

  getModVidLink = (modVidLink) => {
    this.setState({ modVidLink });
  };

  componentDidMount() {
    this.getData(defaultQ);
  };

  render() {
    console.log(this.state.q);
    if(this.state.vids.length === 0){
      return(
        <h1>loading</h1>
      )
    }else{
      return (
        <div className="App container">
          <h1>Latest Covid-19 News</h1>
          <MenuBar onSubmit={this.getData} />
          <div className="content">
            <DataPanel data="2,790,988"/>
            <VideoList videos={this.state.vids.items} getModVidLink={this.getModVidLink} />
          </div>
          <VideoModal modVidUrl={this.state.modVidLink} />
        </div>
      );
    }
  }
}

export default App;
