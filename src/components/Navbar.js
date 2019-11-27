import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

const Navbar = (props) => {
  return (
    <Router>
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
            <input className="form-control mr-sm-2" type="search" placeholder="Search Card" aria-label="Search" value={props.keySearch} onChange={ props.handleChange }/>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={ props.handleSearch}>Search Card</button>
          </form>
        </nav>
      </div>
    </Router>
    
  )
}

export default Navbar