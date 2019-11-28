import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import {useDispatch} from 'react-redux'
import {fetchsearch} from '../store/actions'

const Navbar = (props) => {
  const dispatch = useDispatch()
  const [ search, setSearch] = useState('') 

  const handleDataSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchsearch(search))
    setSearch('')
  }

  return (
      <div>
        <nav className="navbar navbar-light bg-dark">
          <Link to="/">
            <div className="navbar-brand">
              <div style={{color: "white"}}>
                Yugioh Trading Card
              </div>
            </div>
          </Link>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search Card" aria-label="Search" value={search} onChange={ handleDataSearch }/>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={ handleSearch}>Search Card</button>
          </form>
        </nav>
      </div>
  )
}

export default Navbar