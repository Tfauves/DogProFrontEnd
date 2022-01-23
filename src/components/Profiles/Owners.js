import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import Spinner from '../faCommon/Spinner';
import axios from 'axios';
import Owner from './Profiles';

const Owners = (props) => {
  const [auth] = useContext(AuthContext)
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _getOwners = async () => {
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
        setOwners(res.data);
      } catch (err) {
        console.log(err.response.message)
      }


    }
    setLoading(true);
    _getOwners();
  },[auth.token])

  const displayProfiles = () => {
    return owners.map(own => <Owner owner={own} key={own.id}/>)
 
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Welcome</h1>
      {loading ? 
        <Spinner /> 
      :
        displayProfiles()
      }
    </div>
  )
}

export default Owners;