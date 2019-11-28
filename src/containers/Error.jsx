import React, { useState, useEffect } from 'react'

import {useDispatch} from 'react-redux'
import {resetData} from '../store/actions'
import {fetch} from '../store/actions'

const Error = (props) => {
  const dispatch = useDispatch()
  const handleReset = (e) => {
    e.preventDefault()
    dispatch(resetData())
    dispatch(fetch())
  }

  return(
    <>
      <div className="card sm-12 my-2 mx-1 shadow p-3 mb-5" style={{maxWidth: "100%", marginTop: "20px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://vignette.wikia.nocookie.net/yugioh/images/f/fe/FakeTrap-MRD-NA-R-UE-Reprint.png/revision/latest?cb=20171206102725" className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.errors.error}</h5>
              <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={handleReset}>Back</button>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}


export default Error