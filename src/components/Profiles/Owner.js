import React from 'react';
import BorderCard from '../common/BorderCard';

const Owner = (props) => {

  const {name} = props.owner

  return (
    <BorderCard>
      <h2>{"hello"}</h2>
      <p>{name}</p>
    </BorderCard>
  )
}

export default Owner;