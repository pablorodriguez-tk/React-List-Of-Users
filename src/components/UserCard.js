import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import "./UserCard.css";

class UserCard extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList() {
    return this.props.users.map((user) => {
      return (
        <div className=" col" href="#">
          <div className="card">
            <img
              src={`${user.picture.large}`}
              className="card-img-top rounded-circle mx-auto"
              alt="..."
            />
            <div className="card-body mx-auto">
              <h5 className="card-title">
                {user.name.first} {user.name.last}
              </h5>
              <p className="text-secondary">
                <i className="bi bi-geo-alt-fill"> </i>
                {user.location.country}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 g-lg-3">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state };
};
export default connect(mapStateToProps, { fetchUsers })(UserCard);
