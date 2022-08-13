import { FaLongArrowAltRight, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserItems({ user }) {
  return (
    <div className="col-md-3 mb-4" data-testid="card-item">
      <div className="card p-3 justify-content-between">
        <div className="d-flex align-items-center ">
          <FaUser size="22px" />
          <span className="px-2">{user.name}</span>
        </div>
        <button className="card-link">
          <Link to={`/user/${user.id}`}>
            more details <FaLongArrowAltRight />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default UserItems;