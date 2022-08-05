import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import Spinner from "../faCommon/Spinner";
import Card from "react-bootstrap/Card";
import ApiFormHandler from "./ApiFormHandler";
import ListGroup from "react-bootstrap/ListGroup";
import AdvButton from "../common/AdvButton";

const ApiInfo = (props) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const [info, setInfo] = useState({
    id: params.breedName,
  });

  useEffect(() => {
    const getInfo = async () => {
      const res = await axios.get(`${apiHost}/api/info/breed/${info.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(res.data);
      setInfo(res.data);
      setLoading(false);
    };
    setLoading(true);
    getInfo();
  }, []);

  const displayInfo = () => {
    return info.map(({ weight: { imperial }, name, breed_group }) => (
      <div>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            {/* <ListGroup.Item>{id}</ListGroup.Item> */}
            <ListGroup.Item>
              <h3>{info.weight.imperial}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Time: {name}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Activity: {breed_group}</p>
            </ListGroup.Item>
            <AdvButton>delete entry</AdvButton>
          </ListGroup>
        </Card>
      </div>
    ));
  };

  const displayResponse = () => {
    return (
      <div style={{ marginTop: "3em" }}>
        <h1>breed info</h1>
        {displayInfo()}
        <div style={{ marginTop: "6em" }}>
          {/* <ApiFormHandler query={info.name} breedName={info.id} /> */}
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {loading ? <Spinner /> : displayResponse()}
    </div>
  );
};

export default ApiInfo;
