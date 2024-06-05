import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

const UserList = ({ userData, fetchUsers }) => {
  return (
    <div>
      <h2>User List</h2>
      <button onClick={fetchUsers}>Fetch Data</button>
      {userData.loading && <p>Loading...</p>}
      {userData.error && <p>{userData.error}</p>}
      <ul>
        {userData.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
