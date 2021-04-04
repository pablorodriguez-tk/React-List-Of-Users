import React from "react";
import UserCard from "../components/UserCard";
import { connect } from "react-redux";
import { fetchUsers, transitionOn, transitionOff } from "../actions";
import InfiniteScroll from "react-infinite-scroller";
import { CSSTransition } from "react-transition-group";
import "../style/UserList.css";

class UserList extends React.Component {
  componentDidMount() {
    this.props.transitionOn();
  }

  componentWillUnmount() {
    this.props.transitionOff();
  }

  render() {
    return (
      <CSSTransition
        classNames="container"
        in={this.props.animation}
        timeout={1000}
      >
        <div className="container">
          <InfiniteScroll
            className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 g-lg-3"
            loadMore={this.props.fetchUsers}
            hasMore
            loader={<span key="loader" className="hidden" />}
          >
            {this.props.users.map((user, index) => (
              <UserCard
                key={index}
                name={user.name}
                location={user.location}
                picture={user.picture}
                phone={user.phone}
                email={user.email}
                login={user.login}
              />
            ))}
          </InfiniteScroll>
        </div>
      </CSSTransition>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.usersReducer, animation: state.transitionReducer };
};

export default connect(mapStateToProps, {
  fetchUsers,
  transitionOn,
  transitionOff,
})(UserList);
