import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../faCommon/Spinner";


const Avatar = (props) => {
    const params = useParams();
    const [owner, setOwner] = useState({
      id: params.proId,
      avatar: params.proAva
    });
    const [loading, setLoading] = useState(true);
    const [auth] = useContext(AuthContext);
  
    useEffect(() => {
      const _fetchOwner = async () => {
        const res = await axios.get(
          `http://localhost:8080/api/profile/${owner.proAva}`,
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
  
}  

export default Avatar;