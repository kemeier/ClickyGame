import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {

  state = {
    cards
  };

  render() {
    return (
      <Wrapper>
        <Title>Memory Game: Tribute to the Chihuahua</Title>
        <h1>Click on a Chihuahua to earn points, but don't click any Chihuahua more than once!!</h1>
          <Cards
            id={cards.id}
            key={cards.id}
            name={cards.name}
            image={cards.image}
            occupation={cards.occupation}
            location={cards.location}
          />
      </Wrapper>
    );
  }
}

export default App;
