import React from 'react';

const VideoListItem = ({ video }) => {
    const thumbnail = video.snippet.thumbnails.default.url;
    
    return (
        <li className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={ thumbnail }/>

                    <div className="media-body">
                        <div className="media-heading">
                            { video.snippet.title }
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;