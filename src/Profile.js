import React, { useContext } from 'react'
import UserContext from './context/user';

function Profile() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Profile</h1>
            <div>{user}</div>
        </>
    )
}

export default Profile