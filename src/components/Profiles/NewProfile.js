// import React, {useState, useContext} from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
// import NewProfileForm from './NewProfileForm';


// const NewProfile = () => {

//   const [query, setQuery] = useState({
//     username: '',
//     password: ''
//   })
//   const [submitting, setSubmitting] = useState(false);
//   // const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
 
//   const updateForm = (field, value) => {
//     setQuery({
//       ...query,
//       [field]: value
//     })
//   }

//   const onSubmit = async () => {
//     // submit query to backend to login.
//     setSubmitting(true);
//     try {
//       const res = await axios.post('http://localhost:8080/api/profile', query);
      
//       setSubmitting(false);
//       navigate('/profiles');
//     } catch (err) {
//       console.error(err.response.data.message);
//       alert(err.response.data.error);
//       setSubmitting(false);
//     }
//   }

//   return (
//     <div style={{
//       display: "flex",
//       flex: "1",
//       flexDirection: "column",
//       alignItems: 'center',
//       minHeight: '100vh',
//     }}>
//       <h1>Login</h1>
//       <NewProfileForm 
//         query={query} 
//         updateForm={updateForm} 
//         onSubmit={onSubmit}
//         submitting={submitting}
//       />
//     </div>
//   )
// }

// export default NewProfile;