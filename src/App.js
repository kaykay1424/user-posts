// Libraries
import React, {useEffect, useState} from 'react';
import axios from 'axios';

// Components
import Table from './components/Table';
import Posts from './components/Posts';

import './App.css';

function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => {
                setUsers(data);
            });
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => {
                setPosts(data);
            });
    }, []);

    const selectUser = (user) => {
        setSelectedUser(user);
    }
  return (
        <div className="App">
            <h1>Users</h1>
            <Table selectUser={selectUser} selectedUser={selectedUser} users={users} />
            { selectedUser && <Posts selectedUser={selectedUser} posts={posts} /> }
        </div>
  );
}

export default App;
