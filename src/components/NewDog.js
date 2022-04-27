import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import NewDogForm from './NewDogForm';
import axios from 'axios';
import { AuthContext } from './Providers/AuthProvider';



const NewDog = () => {
    const host = "http://localhost:8080";

    let navigate = useNavigate();

    const [query, setQuery] = useState({
        name: "",
        age: "",
        weight: "",
        sex: "",
        breedName: "",
        breedGroup: "",

    });

    const [auth, setAuth] = useContext(AuthContext)

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]: value
        })
    }

    const onSubmit = async (token) => {
        const data = query;
        data.name = query.name;
        data.age = query.age;
        data.weight = query.weight;
        data.sex = query.sex;
    
        data.breedName = query.breedName;
        data.breedGroup = query.breedGroup;
        
        try {
            const res = await axios.post(
               
                `${host}/api/dogs/new`,
                 data,
                 {
                    headers: {
                      "Authorization": `Bearer ${token}`
                    }
                  }
                 
                 )
            
            navigate('/profile')

        }catch (err) {
            alert(err.response.data.message);
        }
    }

    return (
        <NewDogForm 
        query={query}
        updateForm={updateForm}
        onSubmit={onSubmit}
        />
    )

}
export default NewDog;