import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOU_TUBE_APIKEY='';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null,
            term: ''
        };

        YTSearch({ key: YOU_TUBE_APIKEY, term: this.state.term }, videos => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    componentWillUpdate() {
        YTSearch({ key: YOU_TUBE_APIKEY, term: this.state.term }, videos => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            });
        });

    }

    render() {
        return (
            <div>
                <SearchBar setTerm={ term => this.setState({term}) } />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={ this.state.videos } />
            </div>
        );
    }
} 

ReactDOM.render(<App/>, document.querySelector('.container'));