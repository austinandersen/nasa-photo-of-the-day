import React from 'react';


const NasaPhoto = (props) => {
    return (
        <div className='nasa-photo-wrapper'>
            <h3>{props.video.title}</h3>
            <p>{props.video.date}</p>
            <iframe src={props.video.url}></iframe>
            <p className='explanation'>{props.video.explanation}</p>
        </div>
    )
}

export default NasaPhoto;