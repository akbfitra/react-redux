import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import { withRouter } from "react-router";

const ListCard = (props) => {
  
  return(
    <div className ="row justify-content-between">
      { props.loading
        ? 
          <div className="d-flex justify-content-center" style={{width: "80vw", height:"80vh", alignItems: "center"}}>
            <div className="spinner-grow" style={{width: "6rem" , height: "6rem"}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        : 
        props.data.map((datacard) => (
          <div key={datacard.id} className="card col-sm-3 my-2 mx-1 shadow p-3 mb-5">
            <img src={datacard.card_images[0].image_url} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{datacard.name}</h5>
              <p className="card-text">Race: {datacard.race}</p>
              <p className="card-text">Type: {datacard.type}</p>
              
              <Link to={`/detail/${datacard.id}`}> <div href="#" className="btn btn-secondary btn-lg btn-block">Detail</div></Link>
            </div>
          </div>
        ))
      }
      
    </div>
    
  )
  
}


export default withRouter(ListCard)