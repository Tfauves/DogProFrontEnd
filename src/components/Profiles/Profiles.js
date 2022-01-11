import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import Spinner from '../faCommon/Spinner';
import axios from 'axios';
import Profile from './Profile';

const Profiles = (props) => {
  const [auth] = useContext(AuthContext)
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // use effect to pull list of developers
  // use state to store the developers
  // neet bearer token to get the developer list.

  useEffect(() => {
    const _getProfiles = async () => {
      try {

        const res = await axios.get(
          'http://localhost:8080/api/profile',
          {
            headers: {
              "Authorization": `Bearer ${auth.token}`
            }
          }
        )
        console.log(res.data)
        setLoading(false);
        setProfiles(res.data);
      } catch (err) {
        console.log(err.response.message)
      }


    }
    setLoading(true);
    _getProfiles();
  },[auth.token])

  const displayProfiles = () => {
    return profiles.map(pro => <Profile profile={pro} key={pro.id}/>)
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Developers</h1>
      {loading ? 
        <Spinner /> 
      :
        displayProfiles()
      }
    </div>
  )
}

export default Profiles;