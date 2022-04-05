import React, { useState , useEffect } from "react";
import axios from 'axios'
import PostCard from "components/PostCard/PostCard";

const baseUrl = 'http://localhost:3001/users'

const SearchPage = () => {
    const [users, setUsers] = useState([]);
    const [searchField, setSearchField] = useState('');     

    useEffect(() => {
        axios(baseUrl).then(resp => {
            setUsers(resp.data);
        })
    },[])
    
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchField(value);
    };

    const renderCards = () => {
        return users.map((user) => 
            {if (user.skills.includes(searchField)) {
                return <PostCard user={user}/>
            }}
        )
    }

    return (
        <React.Fragment>
            <h1>carregou a página de consulta...</h1>
            <h2>Testando consulta com axios...</h2>
            <input type="text" onChange={handleChange} value={searchField} />
            <div>
                {renderCards()}
            </div>
        </React.Fragment>
    )
}
export default SearchPage;