import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList() {
    return this.props.users.map((user) => {
      return <div>{user.name.first}</div>;
    });
  }

  render() {
    // console.log(this.props.users);
    return <div>{this.renderList()}</div>;

    // return <div>UserList</div>;
  }
}

const mapStateToProps = (state) => {
  return { users: state };
};
export default connect(mapStateToProps, { fetchUsers })(UserList);
