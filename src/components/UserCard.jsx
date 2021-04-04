import React from "react";
import "../style/UserCard.css";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  const country = `${props.location.country}`;
  const fullName = `${props.name.first} ${props.name.last}`;
  const picture = `${props.picture.large}`;
  const userName = `${props.login.username}`;

  return (
    <div className="col">
      <Link
        to={{
          pathname: `/${userName}`,
          state: props,
        }}
        className="text-decoration-none text-dark col"
      >
        <div>
          <div className="card">
            <img
              src={`${picture}`}
              className="card-img-top rounded-circle mx-auto"
              alt={`${picture}`}
            />
            <div className="card-body mx-auto ">
              <h5 className="card-title ">{fullName}</h5>
              <p className="text-secondary ">
                <i className="bi bi-geo-alt-fill "> </i>
                {country}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
