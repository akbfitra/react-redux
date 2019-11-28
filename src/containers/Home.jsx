import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {connect, useSelector, useDispatch} from 'react-redux'

import Navbar from '../components/Navbar'
import ListCard from '../components/ListCard'
import DetailCard from './DetailCard'
import Error from './Error'

import { fetch } from '../store/actions'

const Home = (props) => {
  const cekloading = useSelector(state => state.isLoading)
  const errorData = useSelector(state => state.error)
  
  useEffect( () => {
    props.data()
  }, [])

  return(
    <>
      <Router>
      <Navbar/>
        <div className="container">
          <div className="row">
            <Switch>
              <Route path='/detail/:id'>
                <DetailCard datacard={props.dataFetch} />
              </Route>
                
              <Route exact path='/'>
                  {
                  errorData.error
                  ?
                  <Error errors = { errorData }/>
                  :
                  <ListCard data={props.dataFetch} loading = { cekloading }/> 
                  }
              </Route>
                
            </Switch>
          </div>
        </div>
      </Router>
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
      dispatch(fetch())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)