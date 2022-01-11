import React from 'react';
import BorderCard from '../common/BorderCard';

const Profile = (props) => {

  const {name, greeting} = props.profile

  return (
    <BorderCard>
      <h2>{greeting}</h2>
      <p>{name}</p>
    </BorderCard>
  )
}

export default Profile;