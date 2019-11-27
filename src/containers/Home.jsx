import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import {connect, useSelector, useDispatch} from 'react-redux'

import Navbar from '../components/Navbar'
import ListCard from '../components/ListCard'
import DetailCard from './DetailCard'

import {loading, loading_done, fetch} from '../store/actions'

// import './App.css';
import axios from 'axios'



const Home = (props) => {
  const dispatch = useDispatch()
  const cekloading = useSelector(state => state.isLoading)
  const [ dataRandom, setDataRandom] = useState([]) 
  const [ search, setSearch] = useState('') 
  // const [isLoading, setIsLoading] = useState(false)
  
  // const fetch = () => {
  //   // setIsLoading(true)
  //   dispatch(loading())
  //   axios({
  //     method:'GET',
  //     url: 'https://db.ygoprodeck.com/api/v5/cardinfo.php?banlist=tcg&level=4&sort=name'
  //   })
  //     .then(({data}) => {
  //       dispatch(loading_done())
  //       setDataRandom(data)
        
  //       props.data(data)
        
  //     })
  //     .catch(({response}) => {
  //       console.log(response)
  //     })
  // }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const fetchSearch = (e) => {
    dispatch(loading())
    e.preventDefault()
    axios({
      method:'GET',
      url: `https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=${search}`
    })
      .then(({data}) => {
        dispatch(loading_done())
        setDataRandom(data)
        
        setSearch('')
      })
      .catch(({response}) => {
        console.log(response)
      })
  }

  useEffect( () => {
    props.data()
  }, [])

  

  return(
    <>
      <Navbar handleChange= { handleChangeSearch } keySearch = { search } handleSearch = { fetchSearch }/>
      <div>
      </div>
        <div className="container">
          <div className="row">
            <Router>
              <Switch>
                <Route exact path='/detail/:id'>
                  <DetailCard datacard={props.dataFetch} />
                </Route>
                <Route exact path="/">
                  <ListCard data={props.dataFetch} loading = { cekloading }/> 
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
    </>
  )
}

function mapStateToProps (state){
  return {
    dataFetch: state.dataRandom
  }
}

function mapDispatchToProps(dispatch){
  return {
    data(){
      // dispatch(loading())
      dispatch(fetch())
      // dispatch(loading_done())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)