import React from 'react';
import BorderCard from '../common/BorderCard';

const Dog = (props) => {

  const {id,name, breed, age, weight, sex} = props.dog

  return (
    <BorderCard onClick={() => props.onSelect(id)}>
      <h2>{name}</h2>
      <p>{breed}</p>
      <p>{age}</p>
      <p>{weight}</p>
      <p>{sex}</p>

    </BorderCard>
  )
}

export default Dog;