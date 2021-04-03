import React from "react";
import UserCard from "../components/UserCard";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import InfiniteScroll from "react-infinite-scroller";

const UserList = (props) => {
  return (
    <div className="container ">
      <InfiniteScroll
        className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 g-lg-3"
        pageStart={0}
        loadMore={props.fetchUsers}
        hasMore
      >
        {props.users.map((user, index) => (
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
  );
};

const mapStateToProps = (state) => {
  return { users: state.usersReducer };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
