import React from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const UserDetails = (props) => {
  const history = useHistory();
  let { id } = useParams();
  console.log(props);

  const array = props.users.usersReducer;

  const position = array.indexOf(
    array.filter(function (val) {
      return val.login.username === id;
    })[0]
  );

  if (position === -1) {
    return "El usuario no existe";
  }

  const city = `${array[position].location.city} ${array[position].location.state} ${array[position].location.country}`;
  const email = `${array[position].email}`;
  const name = `${array[position].name.first} ${array[position].name.last}`;
  const phone = `${array[position].phone}`;
  const picture = `${array[position].picture.large}`;
  const street = `${array[position].location.street.number} ${array[position].location.street.name}`;
  const username = `${array[position].login.username}`;

  return (
    <React.Fragment>
      <div className="card">
        <img
          src={picture}
          alt={picture}
          className="card-img-top rounded-circle mx-auto"
        />
        <div className="card-body mx-auto ">
          <div className="name">{name}</div>
          <div className="username">
            <div className="username-title">Username</div>
            {username}
          </div>
          <hr />
          <div className="email">
            <div className="email-title">Email</div>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <hr />
          <div className="phone">
            <div className="phone-title">Phone</div>
            {phone}
          </div>
          <hr />
          <div className="address">
            <div className="address-title">Address</div>
            {street}
            <br />
            {city}
          </div>
          <hr />
          <div className="btn-container">
            <button onClick={() => history.push("/")}>Go Back</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { users: state };
};

export default connect(mapStateToProps)(UserDetails);
