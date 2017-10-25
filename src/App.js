import React, { Component } from 'react';
import SearchBar from './componets/search_bar';
import VideoList from './componets/video_list';
import VideoDetail from './componets/video_detail';
import './App.css';
import YouTubeSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBR3z8KY75KLLNUDhXBiQFTIB4i9NejoIY';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

   this.videoSearch('coldplay') 
  }

  videoSearch(term){
    YouTubeSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo=>{this.setState({selectedVideo})}} 
            videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;
