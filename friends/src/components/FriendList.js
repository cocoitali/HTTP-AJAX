import React from "react";
import PropTypes from 'prop-types';


const FriendsList = props => {

  return (
    <div>
      <div>
        <h1>{props.friends.name}</h1>
        <h2>{props.friends.age}</h2>
        <h3>{props.friends.email}</h3>

      </div>
        <button onClick={() => props.deleteHandler(props.friends.id)}>delete</button>
        <button onClick={(e) => props.goToUpdate(e, props.friends.id)}>update</button>
      
    </div>

  );
};

FriendsList.propTypes = {
  friends: PropTypes.object,
  deleteHandler: PropTypes.func,
  goToUpdate: PropTypes.func,
}

export default FriendsList;
