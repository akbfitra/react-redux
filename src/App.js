import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar'
import ListCard from './components/ListCard'

import './App.css';
import axios from 'axios'

const App = () => {
  
  const [ dataRandom, setDataRandom] = useState([]) 
  const [ search, setSearch] = useState('') 
  const [isLoading, setIsLoading] = useState(false)
  
  const fetch = () => {
    setIsLoading(true)
    axios({
      method:'GET',
      url: 'https://db.ygoprodeck.com/api/v5/cardinfo.php?banlist=tcg&level=4&sort=name'
    })
      .then(({data}) => {
        setIsLoading(false)
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
    setIsLoading(true)
    e.preventDefault()
    axios({
      method:'GET',
      url: `https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=${search}`
    })
      .then(({data}) => {
        setIsLoading(false)
        setDataRandom(data)
      })
      .catch(({response}) => {
        console.log(response)
      })
  }

  useEffect( () => {
    fetch()
  }, [])

  

  return(
    <div>
      <Navbar handleChange= { handleChangeSearch } keySearch = { search } handleSearch = { fetchSearch }/>
      <div className="container">
        <div className="row">
          <ListCard data={dataRandom} loading = { isLoading }/> 
        </div>
      </div>
    </div>
  )
}



export default App;
