import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [
      {
        name: 'Formation',
        artist: 'Beyonce',
        album: 'Lemonade',
        id: '1'
      },
      {
        name: 'Tiny Dancer',
        artist: 'Elton John',
        album: 'Madman Across The Water',
        id: '0'
      }
    ]};
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          // Add a SearchBar component -->
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />;
            // Add a Playlist component -->
          </div>
        </div>
      </div>
    )
  }
}

export default App;
