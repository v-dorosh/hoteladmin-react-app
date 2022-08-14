import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/usersActions";
import UserItems from "./UserItems";
import ReactLoading from "react-loading";
import { CSVLink } from "react-csv";
import Select from "react-select";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const UsersList = () => {
  const listOfUsers = useSelector((state) => state.users.users);
  const done = useSelector((state) => state.users.loading);

  const dispatch = useDispatch();

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
  }

  const onReset = (event) => {
    setFilteredUsers(listOfUsers);
  };

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
      <div className="row">
        <div className="dropdown-container container py-2">
          <Select
              className="inputSelect"
              title="select or filter hotel employee"
              area-label="select or filter employee"
              width='300px'
              menuColor='ocean'
              placeholder="Select employee"
              defaultValue={filteredUsers}
              onChange={onSelect}
              options={optionList}
            />
            <IconButton onClick={onReset} className="btnReset" title="reset">
              <RestartAltIcon color="secondary" />
            </IconButton>
        </div>
      </div>
      <div className="row">
        {done ? (
          <div className="d-flex flex-wrap justify-content-between">
            <ReactLoading
              type={"cylon"}
              color={"#6667AB"}
              height={90}
              width={140}
            />
          </div>
        ) : (
          <>
            {filteredUsers &&
              filteredUsers.map((user) => <UserItems user={user} key={user.id} />)}
          </>
        )}
      </div>
      <Button className="btnCSV" variant="outlined" title="export list of employees into CSV">
        <CSVLink data={filteredUsers} separator={";"} headers={CSVheaders}>
          Export to CSV
        </CSVLink>
      </Button>
    </div>
  );
};

export default UsersList;