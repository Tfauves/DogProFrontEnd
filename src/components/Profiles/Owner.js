import React from 'react';
import BorderCard from '../common/BorderCard';

const Owner = (props) => {

  const {name, id} = props.owner

  return (
    <BorderCard onClick={() => props.onSelect(id)}>
      <h2>{name}</h2>
      {/* <p>{myDogs}</p> */}
    </BorderCard>
  )
}

export default Owner;