import React, { Component } from 'react';

let styles = {
    width: '100%',
    margin: '50px auto'
}

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="nav-bar">
                <input 
                    type="text" 
                    placeholder="Search video..."
                    style={styles}
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
                <button 
                    className="btn btn-light" 
                    onClick={ () => {
                        this.props.setTerm(this.state.term);
                        this.props.searchYoutubeVideos(this.state.term);
                    } }>
                        <img src="../../images/search-24px.svg"/>
                </button>
            </div>
        );
    }
}

export default SearchBar;