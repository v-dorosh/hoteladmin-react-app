import React, { useState, useEffect } from 'react';
import User from './User';
import './UserCards.css';

const UserCards = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);

  return (
    <div className='usercards'>
      <h3>Hotel admin react app</h3>
      <br />
      <div>
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
          />
        ))}
      </div>
    </div>
  )

// const [data, setData] = React.useState([]);
//   React.useEffect(() => {
//     const fetchUserData = async () => {
//       await fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => res.json())
//         .then((data) => {
//           setData(data);
//           console.log(data);
//         });
//     };
//     fetchUserData();
//   }, []);

//   if (!data.length) return <div> Loading . . . </div>

//   return (
//     <div className="user">
//       Name: {data[0].name}
//       <br />
//       Email: {data[0].email}
//       <br />
//       Phone: {data[0].phone}
//       <br />
//       Address: {data[0].address.street}
//     </div>
//   )
}

export default UserCards;


