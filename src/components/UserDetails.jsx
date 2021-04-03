import React from "react";
import { connect } from "react-redux";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { fetchUsers } from "../actions";

const UserDetails = (props) => {
  const { state: user } = useLocation();
  const history = useHistory();
  // let { id } = useParams();

  // const array = props.users;
  // var position = array.indexOf(
  //   array.filter(function (val) {
  //     return val.login.username === id;
  //   })[0]
  // );
  // console.log(id);
  // console.log(position);
  // const nombre = array[position].name.first;
  // console.log(array);
  // console.log("Nombre: " + nombre);

  const name = `${user.name.first} ${user.name.last}`;
  const street = `${user.location.street.number} ${user.location.street.name}`;
  const city = `${user.location.city} ${user.location.state}, ${user.location.country}`;

  return (
    <React.Fragment>
      <div className="user-detail">
        <div className="heading">
          <img src={user.picture.large} alt={user.picture.large} />
          <div className="heading-details">
            <div className="name">{name}</div>
            <div className="username">
              <div className="username-title">Username</div>
              {user.login.username}
              {/* <div>Now showing post {id}</div> */}
            </div>
            <hr />
            <div className="email">
              <div className="email-title">Email</div>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
            <hr />
            <div className="phone">
              <div className="phone-title">Phone</div>
              {user.phone}
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
              <button onClick={() => history.goBack()}>Go Back</button>
            </div>
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
