import React from 'react';
import BorderCard from '../common/BorderCard';

const Dog = (props) => {

  const {name, id, breed} = props.owner

  return (
    <BorderCard onClick={() => props.onSelect(id)}>
      <h2>{name}</h2>
      <p>{breed}</p>
    </BorderCard>
  )
}

export default Dog;