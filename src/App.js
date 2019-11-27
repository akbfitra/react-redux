import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/Navbar'
import ListCard from './components/ListCard'
import Home from './containers/Home'


import './App.css';
import axios from 'axios'

const App = () => {
  
  
  // const [ dataRandom, setDataRandom] = useState([]) 
  // const [ search, setSearch] = useState('') 
  // const [isLoading, setIsLoading] = useState(false)
  
  // const fetch = () => {
  //   setIsLoading(true)
  //   axios({
  //     method:'GET',
  //     url: 'https://db.ygoprodeck.com/api/v5/cardinfo.php?banlist=tcg&level=4&sort=name'
  //   })
  //     .then(({data}) => {
  //       setIsLoading(false)
  //       setDataRandom(data)
        
  //     })
  //     .catch(({response}) => {
  //       console.log(response)
  //     })
  // }

  // const handleChangeSearch = (e) => {
  //   setSearch(e.target.value)
  // }

  // const fetchSearch = (e) => {
  //   setIsLoading(true)
  //   e.preventDefault()
  //   axios({
  //     method:'GET',
  //     url: `https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=${search}`
  //   })
  //     .then(({data}) => {
  //       setIsLoading(false)
  //       setDataRandom(data)
  //       setSearch('')
  //     })
  //     .catch(({response}) => {
  //       console.log(response)
  //     })
  // }

  // useEffect( () => {
  //   fetch()
  // }, [])

  

  return(
    <Provider store={store}>
      <Home/>
    </Provider>
  )


}



export default App;
