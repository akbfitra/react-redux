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
  console.log(data)
  return (
      
    <>
    {
      <h1>
        {JSON.stringify(data)}
      </h1>
    }

    
    </>
  )
}

export default DetailCard