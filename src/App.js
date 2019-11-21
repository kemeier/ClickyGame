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
          {this.state.cards.map(card => (
          <Cards
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
          ))}
      </Wrapper>
    );
  }
}

export default App;
