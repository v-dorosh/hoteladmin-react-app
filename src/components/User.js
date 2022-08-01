import React, { useEffect } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaGlobe,
  FaLongArrowAltLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaUserTag,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ReactLoading from "react-loading";
import { getUserById } from "../store/actions/userActions";

const User = () => {
  const userSelected = useSelector((state) => state.user.user);
  const done = useSelector((state) => state.user.loading);
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUserById(id));
    }, 1000);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="container profile my-5 p-5">
      <h2 className="text-center text-uppercase mb-5 ">Hotel employee details</h2>

      <div className="d-flex flex-column align-items-center mb-2">
        {done ? (
          <ReactLoading
            type={"cylon"}
            color={"#6667AB"}
            height={100}
            width={150}
          />
        ) : (
          <>
            <p>
              <FaUser />
              <span>Name : </span> {userSelected.name}
            </p>
            <p>
              <FaUserTag />
              <span>Username : </span> {userSelected.username}
            </p>
            <p>
              <FaEnvelope />
              <span>Email : </span> {userSelected.email}
            </p>

            <p>
              <FaMapMarkerAlt />
              <span>Address : </span> {userSelected.address.street} /{" "}
              {userSelected.address.suite} /{userSelected.address.city} /{" "}
              {userSelected.address.zipcode}
            </p>
            <p>
              <FaPhone />
              <span>Phone : </span> {userSelected.phone}
            </p>
            <p>
              <FaGlobe />
              <span>Website : </span> {userSelected.website}
            </p>
            <p>
              <FaBuilding />
              <span>Company : </span> {userSelected.company.name} /{" "}
              {userSelected.company.catchPhrase}/ {userSelected.company.bs}
            </p>
          </>
        )}
      </div>

      <div className="text-center">
        <button className="return-link text-center mt-5" onClick={handleClick}>
          <FaLongArrowAltLeft /> Return
        </button>
      </div>
    </div>
  );
};

export default User;