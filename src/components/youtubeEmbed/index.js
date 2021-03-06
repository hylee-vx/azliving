import React from 'react';
import './styles.css';

const YoutubeEmbed = ({ title, videoID }) => {
    return (
        <iframe
            title={title}
            src={`https://www.youtube.com/embed/${videoID}`}
            loading="lazy"
            frameBorder="0"
        >
        </iframe>
    );
};

export default YoutubeEmbed;