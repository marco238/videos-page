import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const YOU_TUBE_APIKEY='AIzaSyALjocmYB8sXdsAdq8XRMu50_-ZDjoluqY';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: YOU_TUBE_APIKEY, term: 'surfboards' }, videos => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }
} 

ReactDOM.render(<App/>, document.querySelector('.container'));