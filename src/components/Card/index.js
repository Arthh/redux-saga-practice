import React from 'react';

const Card = (props) => {
  console.log('reender')
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> {props.item.nome} </h5>
        <h6 className="card-subtitle mb-2 text-muted"> {props.item.quantidade} </h6>
        <p className="card-text"> um teste </p>
      </div>
    </div>
  )
}


export default Card;