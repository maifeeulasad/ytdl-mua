import React from 'react';

import './App.css';

const fs = require('fs');
const ytdl = require('ytdl-core');

const { Url } = require('url');
const URL = Url;
const url = require('url');

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      url:'',
    }
  }

  onUrlChange = (e) => {
    this.setState({url:e.target.value})
  }

  onDownloadClick = (e) => {
    e.preventDefault();
    if(this.state.url===undefined || this.state.url===''){
      return;
    }
    console.log(url.format(this.state.url))
    this.download(url.format(this.state.url));
  }

  download(url){
    ytdl(url);
  }

  render(){
    return(
      <div className="center">
        <form action="" className="search-bar">
	        <input required onChange={(e)=>{this.onUrlChange(e)}}/>
	        <button className="search-btn" onClick={(e)=>{this.onDownloadClick(e)}}>
		        <span>Download</span>
	        </button>
        </form>
      </div>
    )
  }

}

export default App;
