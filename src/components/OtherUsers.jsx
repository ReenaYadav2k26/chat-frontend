import React from 'react'
import OtherUser from './OtherUser';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from "react-redux";

const OtherUsers = () => {
    // custom hook to fetch other users
    useGetOtherUsers();
    const { otherUsers } = useSelector(store => store.user);

    console.log("otherUsers =", otherUsers);

    // Normalize to array
    const users = Array.isArray(otherUsers) ? otherUsers : otherUsers ? [otherUsers] : [];

    if (users.length === 0) {
        return <p>No users found.</p>;
    }

    return (
        <div className='overflow-auto flex-1'>
            {users.map((user) => (
                <OtherUser key={user._id} user={user} />
            ))}
        </div>
    );
}

export default OtherUsers;
