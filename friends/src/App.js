import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendList";
// import FriendForm from "./components/FriendForm";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  submitHandler = () => {
    const newFriend = {
      id: this.state.friends[this.state.friends.length - 1].id + 1,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/friends/", newFriend)
      .then(res => {
        this.setState({ friends: res.data, name: "", age: "", email: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value }); //allows for reuse :)
  };

  // enterHandler = e => { //Trying to submit on Enter, will come back to this
  //   if(e && e.KeyCode === 13) {
  //     console.log()
  //   }
  // }

  // axios.delete(`http://localhost:5000/friends/${id}`)
  //  .then(res => {

  //})

  render() {
    return (
      <div>
        <div>
          {this.state.friends.map(friends => (
            <FriendsList key={friends.id} friends={friends} />
          ))}
        </div>
        {/* <FriendForm friends={this.state.friends}  onSubmit= {this.submitHandler} /> */}
        <form>
          <input
            className="input"
            type="text"
            placeholder="name..."
            required
            value={this.state.name}
            name="name"
            onChange={this.onChangeHandler}
          />
          <input
            className="input"
            type="text"
            placeholder="age..."
            required
            value={this.state.age}
            name="age"
            onChange={this.onChangeHandler}
          />
          <input
            className="input"
            type="text"
            placeholder="email..."
            required
            value={this.state.email}
            name="email"
            onChange={this.onChangeHandler}
          />
        </form>

        <button onClick={this.submitHandler}>save</button>
      </div>
    );
  }
}

export default App;
