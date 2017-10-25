import React from 'react';

const VideoDetail = ({video})=>{
    if (!video){
        return (
            <div>Loading...</div>
        );
    }
    console.log(video);
    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title={video.snippet.title}></iframe>
            </div>
            <div className="details">
                <div>Title: {video.snippet.title}</div>
                <div>Description: {video.snippet.description}</div>
            </div>
      </div>
    );
}

export default VideoDetail;