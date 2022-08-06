import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/usersActions";
import UserItems from "./UserItems";
import ReactLoading from "react-loading";
import { CSVLink } from "react-csv";
import SearchBar from "./SearchBar";

const UsersList = () => {
  const listOfUser = useSelector((state) => state.users.users);
  const done = useSelector((state) => state.users.loading);

  const dispatch = useDispatch();

  // const [users, setUsers] = useState([])
  // const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUsers());
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center text-uppercase mb-5 ">Hotel employees</h2>

      {/* <SearchBar users={getUsers}/> */}

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
            {listOfUser &&
              listOfUser.map((user) => <UserItems user={user} key={user.id} />)}
          </>
        )}
      </div>
      
      <CSVLink data={listOfUser} separator={";"}>
        Export to CSV
      </CSVLink>
    </div>
  );
};

export default UsersList;