import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";



const Profile = (props) => {
  const params = useParams();
  const [profile, setProfile] = useState({
    id: params.proId
  });
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    const _fetchProfile = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/profile/${profile.id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      console.log(res.data);
      setProfile(res.data);
    }
    _fetchProfile();
  }, [])

  return (

    <h1>Profile</h1>

  )
}

export default Profile;