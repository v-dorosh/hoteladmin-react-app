import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/usersActions";
//import { getUserById } from "../store/actions/userActions";
import UserItems from "./UserItems";
import ReactLoading from "react-loading";
import { CSVLink } from "react-csv";
import Select from "react-select";

const UsersList = () => {
  const listOfUsers = useSelector((state) => state.users.users);
  const done = useSelector((state) => state.users.loading);
  //console.log(listOfUsers);
  const dispatch = useDispatch();

  // const [users, setUsers] = useState([])
  // const [searchResults, setSearchResults] = useState([])

  //const [selectedOption, setSelectedOption] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);



  useEffect(() => {
    setTimeout(() => {
      dispatch(getUsers());
    }, 1000);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setFilteredUsers(listOfUsers || []);
  }, [listOfUsers]);
  //console.log(getUsers);

  function listFormatter() {
    const list = [];
    for (const user of listOfUsers ) {
      const userOption = {
        label: user.name, value: user.id
      };
      list.push(userOption);
    }
    return list;
  }

  const optionList = listFormatter();

  function onSelect(option) {
    const selectedUser = listOfUsers.find(user => user.id === option.value);
    setFilteredUsers([selectedUser]);
    //console.log("event", option);
  }

  const CSVheaders = [
    {
      label: 'Name', key: 'name'
    },
    {
      label: 'Email', key: 'email'
    },
    {
      label: 'Company', key: 'company.name'
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center text-uppercase mb-5 ">Hotel employees</h2>

      {/* <SearchBar users={getUsers}/> */}

      <div className="dropdown-container">
        <Select
            placeholder="Select employee"
            defaultValue={filteredUsers}
            onChange={onSelect}
            options={optionList}
          />
      </div>

      <div className="row">
        {done ? (
          <div className="d-flex flex-wrap justify-content-between">
            <ReactLoading
              type={"cylon"}
              color={"#6667AB"}
              height={100}
              width={150}
            />
          </div>
        ) : (
          <>
            {filteredUsers &&
              filteredUsers.map((user) => <UserItems user={user} key={user.id} />)}
          </>
        )}
      </div>
      
      <CSVLink data={filteredUsers} separator={";"} headers={CSVheaders}>
        Export to CSV
      </CSVLink>
    </div>
  );
};

export default UsersList;