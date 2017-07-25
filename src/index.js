import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/SearchBar.js';
import VideoList from './Components/VideoList.js';
import VideoDetail from './Components/VideoDetail.js';
const API_KEY = "AIzaSyDlAnCVG4p13T5WtOLwnlrRNHGa5Qyn7is";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('BEYONCE')
    }

    videoSearch(searchTerm) {
        YTSearch({ key: API_KEY, term: searchTerm }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
