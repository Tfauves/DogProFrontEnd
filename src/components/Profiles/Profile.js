import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../faCommon/Spinner";
import Button from "../common/Button";
import { Fragment } from "react/cjs/react.production.min";

const Profile = (props) => {
  const params = useParams();
  const [owner, setOwner] = useState({
    id: params.proId
  });
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    const _fetchOwner = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/profile/${owner.id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      console.log(res.data);
      setOwner(res.data);
      setLoading(false);
    }
    setLoading(true);
    _fetchOwner();
  }, [])


  const displayProfile = () => {
    return (
      <Fragment>
            <div style={{
            flex: 1,
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src="https://via.placeholder.com/200" />
          </div>
          <div style={{
            flex: 2,
            flexDirection: 'column',
            color: '#F1F1F1',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <h1>{owner.name.toUpperCase()}</h1>
            <h2>Dog {owner.myDogs}</h2>
          </div>
      </Fragment>
    )
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      {loading ? (
        <Spinner /> 
      ) : 
      // <h1>Profile, {owner.name}</h1>
      displayProfile()
   
      }
    </div>

   

  )
}

export default Profile;