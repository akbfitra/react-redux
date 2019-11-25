import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar'
import ListCard from './components/ListCard'

import './App.css';
import axios from 'axios'

const App = () => {
  
  const [ dataRandom, setDataRandom] = useState([]) 
  const [ search, setSearch] = useState('') 
  
  const fetch = () => {
    axios({
      method:'GET',
      url: 'https://db.ygoprodeck.com/api/v5/cardinfo.php?banlist=tcg&level=4&sort=name'
    })
      .then(({data}) => {
        
        setDataRandom(data)
      })
      .catch(({response}) => {
        console.log(response)
      })
  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const fetchSearch = (e) => {
    e.preventDefault()
    axios({
      method:'GET',
      url: `https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=${search}`
    })
      .then(({data}) => {
        console.log(data, 'aaaaaaaaaaaaaaaa')
        setDataRandom(data)
      })
      .catch(({response}) => {
        console.log(response)
      })
  }

  useEffect( () => {
    fetch()
  }, [])
  console.log(search)
  console.log(dataRandom)

  return(
    <div>
      <Navbar handleChange= { handleChangeSearch } keySearch = { search } handleSearch = { fetchSearch }/>
      <div className="container">
        <div className="row">
          <ListCard data={dataRandom}/> 
        </div>
      </div>
    </div>
  )
}



export default App;
