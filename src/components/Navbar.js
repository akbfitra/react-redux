import React, { useState, useEffect } from 'react'

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          <div style={{color: "white"}}>
            Yugioh Trading Card
          </div>
        </a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search Card" aria-label="Search" value={props.keySearch} onChange={ props.handleChange }/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ props.handleSearch}>Search Card</button>
        </form>
      </nav>
    </div>
  )
}


export default Navbar