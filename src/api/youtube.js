import axios from 'axios';
import config from '../config';

let apiURL = `https://www.googleapis.com/youtube/v3/
let testStr = 'search?part=snippet&maxResults=50&order=date&q=coronavirus%20news&relevanceLanguage=en&key=${config}`;

axios.get(url, {
})