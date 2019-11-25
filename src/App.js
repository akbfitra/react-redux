import React, { Component } from 'react';

import Navbar from './components/Navbar'
import ListCard from './components/ListCard'

import './App.css';
import axios from 'axios'

class App extends Component{
  
  state ={
    dataRandom : []
  }

  componentDidMount(){
    this.fetch()
  }

  fetch(){
    axios({
      method:'GET',
      url: 'https://db.ygoprodeck.com/api/v5/cardinfo.php?banlist=tcg&level=4&sort=name'
    })
      .then(({data}) => {
        this.setState({
          dataRandom : data
        })
      })
      .catch(({response}) => {
        console.log(response.data)
      })
  }
  render(){
    return(
      <div>
        <Navbar/>
        <div className="container">
          <div className="row">
          
            <ListCard data={this.state.dataRandom}/> 
          
          </div>
        </div>
      </div>
    )
  }
}

export default App;
