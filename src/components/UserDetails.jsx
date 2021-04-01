import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserDetails extends React.Component {
  render() {
    console.log(this.props.users)
  return <div>UserDetails</div>

  }
}

const mapStateToProps = (state) => {
  return { users: state };
};

export default connect(mapStateToProps,)(UserDetails);
