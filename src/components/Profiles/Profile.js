import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../faCommon/Spinner";


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
      <h1>Profile, {owner.name}</h1>
      }
    </div>

   

  )
}

export default Profile;