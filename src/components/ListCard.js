import React, { useState, useEffect } from 'react'


const ListCard = (props) => {
  return(
    <div className ="row justify-content-between">
      {
        props.data.map((datacard) => (
          <div key={datacard.id} className="card col-sm-3 my-2 mx-1 shadow p-3 mb-5">
            <img src={datacard.card_images[0].image_url} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{datacard.name}</h5>
              <p className="card-text">Race: {datacard.race}</p>
              <p className="card-text">Atrribute: {datacard.attribute}</p>
              <p className="card-text">Star: {datacard.level}</p>
              <a href="#" className="btn btn-primary">Detail</a>
            </div>
          </div>
        ))
      }
    </div>
  )
  
}


export default ListCard