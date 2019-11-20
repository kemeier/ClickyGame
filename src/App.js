import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {

  state = {
    friends
  };

  removeFriend = id => {
   
    const friends = this.state.friends.filter(friend => friend.id !== id);
  
    this.setState({ friends });
  };


  render() {
    return (
      <Wrapper>
        <Title>Memory Game: Tribute to the Chihuahua</Title>
        <h1>Click on a Chihuahua to earn points, but don't click any Chihuahua more than once!!</h1>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
