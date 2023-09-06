import React from 'react'

export default function Card(props) {
    const click=()=>{
        
    }
  return (
    <div>
        <div className="card" style={{ width: "18rem" }}>
  <div className="card-body shadow-lg">
    <h5 className="card-title text-dark">{props.title}</h5>
    <p className="card-text text-dark">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href className="btn btn-primary mx-2">
      receipe
    </a>
    <a href className="btn btn-danger mx-2" onClick={click}>
      remove
    </a>
  </div>
</div>
    </div>
  )
}
