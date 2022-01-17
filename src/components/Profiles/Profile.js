import React from 'react';
import BorderCard from '../common/BorderCard';
import Profiles from './Profiles';

const Profile = (props) => {

  //  const {name} = props.profile

  return (
    <BorderCard>
      <h2>{"Welcome"}</h2>
      <p>{"your profile"}</p>

      {/* <p>{name}</p> */}
    </BorderCard>
  )
}

export default Profile;