import React, { useState, useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const DetailCard = (props) => {
  const { id } = useParams()
  const data = props.datacard.filter( function(el) { return el.id == id})
  
  return (
    <>
     {
       data.map((detailcard) => (
        <div key={detailcard.id} className="card sm-12 my-2 mx-1 shadow p-3 mb-5" style={{maxWidth: "100%", marginTop: "20px"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={detailcard.card_images[0].image_url} className="card-img" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{detailcard.name}</h5>
                <p className="card-text">{detailcard.desc}</p>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Detail</th>
                      <th scope="col">Description</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">id</th>
                      <td>{detailcard.id}</td>
                      
                    </tr>
                    <tr>
                      <th scope="row">type</th>
                      <td>{detailcard.type}</td>
                      
                    </tr>
                    <tr>
                      <th scope="row">Attack</th>
                      <td>{detailcard.atk}</td>
                    </tr>
                    <tr>
                      <th scope="row">Defend</th>
                      <td>{detailcard.def}</td>
                    </tr>
                    <tr>
                      <th scope="row">Level</th>
                      <td>{detailcard.level}</td>
                    </tr>
                    <tr>
                      <th scope="row">Race</th>
                      <td>{detailcard.race}</td>
                    </tr>
                    <tr>
                      <th scope="row">Attribute</th>
                      <td>{detailcard.attribute}</td>
                    </tr>
                    <tr>
                      <th scope="row">Archetype</th>
                      <td>{detailcard.archetype}</td>
                    </tr>
                  </tbody>
                </table>

                
              </div>
            </div>
          </div>
        </div>
       ))
     }
    </>
  )
}

export default DetailCard