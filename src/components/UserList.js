import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import UserCard from "./UserCard";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <React.Fragment>
        <UserCard />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state };
};
export default connect(mapStateToProps, { fetchUsers })(UserList);
