import React from "react";
import Header from "./Components/Header";
import "./App.css";

class App extends React.Component {
  state = {
    puppies: [
      {
        name: "Nessa",
        img:
          "https://i.pinimg.com/originals/39/6f/14/396f14bd9c68652906500047d677356c.jpg",
        cuteness: 6
      },
      {
        name: "Bowser",
        img:
          "https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog?w=1440&auto=compress&fm=jpg",
        cuteness: 10
      },
      {
        name: "Barney",
        img:
          "http://cdn.akc.org/content/article-body-image/beagle2_cute_puppies.jpg",
        cuteness: 9
      }
    ],
    selectedPuppy: "Bowser",
    sortBy: "asc"
  };

  selectPuppy = name => {
    this.setState({ selectedPuppy: name });
  };

  sortByCuteness = () => {
    this.setState(currentState => {
      console.log(currentState);
      const newPuppies = [...currentState.puppies];
      currentState.sortBy === "asc"
        ? (currentState.sortBy = "desc")
        : (currentState.sortBy = "asc");

      let num = 1;

      currentState.sortBy === "asc" ? (num = 1) : (num = -1);

      return {
        puppies: newPuppies.sort((a, b) => {
          return a.cuteness > b.cuteness ? num : -num;
        })
      };
    });
  };

  removePuppy = name => {
    this.setState(currentState => {
      return {
        puppies: currentState.puppies.filter(puppy => {
          return puppy.name !== name;
        })
      };
    });
  };

  upvoteCuteness = name => {
    this.setState(currentState => {
      const newPuppies = [...currentState.puppies];
      return newPuppies.map(puppy => {
        return puppy.name === name
          ? (puppy.cuteness = puppy.cuteness + 1)
          : null;
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Header name="FEND" />
        <button onClick={this.sortByCuteness}>Sort puppies by cuteness</button>
        <ul>
          {this.state.puppies.map(puppy => {
            return (
              <li key={puppy.name}>
                <p>{puppy.name}</p>
                {this.state.selectedPuppy === puppy.name && (
                  <img src={puppy.img} alt="cute pup" />
                )}
                <p>cuteness: {puppy.cuteness}</p>
                <button
                  id={puppy.name}
                  onClick={event => this.selectPuppy(puppy.name)}
                >
                  Select Pup
                </button>
                <button
                  onClick={event => this.upvoteCuteness(puppy.name)}
                  id={this.state.selectedPuppy}
                >
                  Upvote Cuteness
                </button>
                <button
                  onClick={event => this.removePuppy(puppy.name)}
                  id={this.state.selectedPuppy}
                >
                  Remove pup
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  // toggleImages = event => {
  // VERY GOOD
  // this.setState(currentState => {
  //   return { showImages: !currentState.showImages };
  // });
  // };
}

export default App;
