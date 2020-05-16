import React, { Component } from 'react';
import '../App.css';
import VideoList from '../Components/VideoList';
import VideoModal from '../Components/VideoModal';
import DataPanel from '../Components/DataPanel';
import RedditPanel from '../Components/RedditPanel';
import MenuBar from '../Components/MenuBar';
import config from '../config.js';
import axios from 'axios';

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

https://about-corona.net/documentation


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
const defaultQ = "coronavirus news";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vids: [],
      modVidLink: '',
      q: '',
      covid19Data: {},
      countryData: {}
    }
  }

  getData = async (term) => {
    const ytSearchResp = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 50,
        order: 'date',
        q: `${defaultQ} ${term}`,
        relevanceLanguage: 'en',
        key: config
      }
    });

    const covid19Data = await axios.get('https://covid19.mathdro.id/api')

    const covid19CountryData = await axios.get('https://covid19.mathdro.id/api/countries/USA');

    const testTest = await axios.get('https://corona-api.com/countries');

    console.log(testTest);

    this.setState({ countryData: covid19CountryData })
    this.setState({ covid19Data: covid19Data.data })
    this.setState({ vids: ytSearchResp.data });
  };

  getModVidLink = (modVidLink) => {
    this.setState({ modVidLink });
  };

  componentDidMount() {
    this.getData(defaultQ);
  };

  render() {
    console.log(this.state.covid19CountryData);
    if(this.state.vids.length === 0){
      return(
        <h1>loading</h1>
      )
    }else{
      return (
        <div className="special-container">
          <div className="header">
          <h1 className="content">Latest Covid-19 News</h1>
          <h3 className="content">Get your latest prime covid-19 news around the world,<br/>anywhere from wherever you are</h3>
          </div>
          <MenuBar />
          <div className="ui grid content-container">
            <DataPanel covid19Data={this.state.covid19Data} covid19CountryData={this.state.countryData}/>
            <VideoList videos={this.state.vids.items} getModVidLink={this.getModVidLink} />
            <RedditPanel />
          </div>
          <VideoModal modVidUrl={this.state.modVidLink} />
        </div>
      );
    }
  }
}

export default App;
