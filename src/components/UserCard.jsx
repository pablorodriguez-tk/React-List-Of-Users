import React from "react";
import "../style/UserCard.css";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  const fullName = `${props.name.first} ${props.name.last}`;

  return (
    <div className="col">
      <Link
        to={{
          pathname: `/${props.login.username}`,
          state: props,
        }}
        className="text-decoration-none text-dark col"
      >
        <div>
          <div className="card">
            <img
              src={`${props.picture.large}`}
              className="card-img-top rounded-circle mx-auto"
              alt={`${props.picture.large}`}
            />
            <div className="card-body mx-auto ">
              <h5 className="card-title ">{fullName}</h5>
              <p className="text-secondary ">
                <i className="bi bi-geo-alt-fill "> </i>
                {props.location.country}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
