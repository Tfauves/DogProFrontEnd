import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../faCommon/Spinner";
// import Button from "../common/Button";
import { Fragment } from "react/cjs/react.production.min";
import image from '../../assets/bgimg.jpg'
// import {faPaw} from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import Avatar from "./Avatar";

const Profile = (props) => {
  const params = useParams();
  const [owner, setOwner] = useState({
    id: params.proId
  });
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";

  useEffect(() => {
    const _fetchOwner = async () => {
  
      const res = await axios.get(
        `${host}/api/profile/${owner.id}`,
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
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          height: '27vh',
          display: 'flex',
          flexDirection: 'row',
          margin: '1rem 0rem',
          padding: '8px',
          maxWidth: '900px',
          width: '100%'
        }}>
            <div style={{
            flex: 1,
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src="https://via.placeholder.com/200" alt="placeholder img" />
          </div>
          <div style={{
            flex: 2,
            flexDirection: 'column',
            color: '#F1F1F1',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <h1>{owner.name.toUpperCase()}</h1>
            
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '100%',
          maxWidth: '900px'
        }}>
          
          {/* <Button style={{
            width: 'auto',
            color: '#F1F1F1',
            backgroundColor: '#23881c'
          }}>
            <FontAwesomeIcon icon={faPaw} /> Add New Dog
          </Button>
          <Button style={{
            width: 'auto',
            color: '#F1F1F1',
            backgroundColor: '#cf0303'
          }}>
            Delete Dog <FontAwesomeIcon icon={faPaw} />
          </Button>  */}
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
      displayProfile()
   
      }
    </div>

   

  )
}

export default Profile;