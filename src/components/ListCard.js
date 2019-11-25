import React, { Component } from 'react'

class ListCard extends Component{
  render(){
    return(
      <div class ="row justify-content-between">
        {
          this.props.data.map((datacard) => (
            <div class="card col-sm-3 my-2 mx-1 shadow p-3 mb-5">
              <img src={datacard.card_images[0].image_url} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{datacard.name}</h5>
                <p class="card-text">{datacard.desc}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default ListCard