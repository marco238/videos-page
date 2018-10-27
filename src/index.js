import React from 'react';
import ReactDOM from 'react-dom';

YOU_TUBE_APIKEY='AIzaSyALjocmYB8sXdsAdq8XRMu50_-ZDjoluqY';

import SearchBar from './components/search_bar';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
} 

ReactDOM.render(<App/>, document.querySelector('.container'));