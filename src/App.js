import React from 'react';

import './App.css';

//const fs = require('fs');
//const ytdl = require('ytdl-core');

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      url:'',
    }
  }

  onUrlChange = (e) => {
    this.setState({url:e.target.value},()=>{console.log(this.state.url)})
  }

  render(){
    return(
      <div className="center">
        <form action="" className="search-bar">
	        <input required onChange={(e)=>{this.onUrlChange(e)}}/>
	        <button className="search-btn" type="submit">
		        <span>Search</span>
	        </button>
        </form>
      </div>
    )
  }

}

export default App;