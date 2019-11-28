import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import List from "./Components/List";
import Button from "./Components/Button";

class App extends React.Component {
  state = {
    puppies: [
      {
        name: "Nessa",
        img:
          "https://i.pinimg.com/originals/39/6f/14/396f14bd9c68652906500047d677356c.jpg",
        cuteness: 6,
        personality: ["Sleepy", "Hungry"]
      },
      {
        name: "Bowser",
        img:
          "https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog?w=1440&auto=compress&fm=jpg",
        cuteness: 10,
        personality: ["Energetic", "Hungry"]
      },
      {
        name: "Barney",
        img:
          "http://cdn.akc.org/content/article-body-image/beagle2_cute_puppies.jpg",
        cuteness: 9,
        personality: ["Energetic", "Cuddly"]
      }
    ],
    puppiesToDisplay: [],
    selectedPuppy: null,
    sortBy: "asc"
  };

  selectPuppy = name => {
    this.setState({ selectedPuppy: name });
  };

  sortByCuteness = () => {
    this.setState(currentState => {
      const newPuppies = [...currentState.puppies];
      currentState.sortBy === "asc"
        ? (currentState.sortBy = "desc")
        : (currentState.sortBy = "asc");

      let num = 1;
      currentState.sortBy === "asc" ? (num = 1) : (num = -1);

      return {
        puppiesToDisplay: newPuppies.sort((a, b) => {
          return a.cuteness > b.cuteness ? num : -num;
        })
      };
    });
  };

  removePuppy = name => {
    this.setState(currentState => {
      return {
        puppiesToDisplay: currentState.puppiesToDisplay.filter(puppy => {
          return puppy.name !== name;
        })
      };
    });
  };

  upvoteCuteness = puppyName => {
    this.setState(currentState => {
      const newPuppies = [...currentState.puppies];
      return newPuppies.map(puppy => {
        return puppy.name === puppyName
          ? (puppy.cuteness = puppy.cuteness + 1)
          : null;
      });
    });
  };

  filterPersonality = puppyPersonality => {
    this.setState(currentState => {
      const newPuppies = [...currentState.puppies];

      return puppyPersonality !== "ChoosePersonality"
        ? {
            puppiesToDisplay: newPuppies.filter(puppy => {
              return puppy.personality.includes(puppyPersonality);
            })
          }
        : { puppiesToDiplay: newPuppies };
    });
  };

  showAllPuppies = () => {
    this.setState(currentState => {
      const newPuppies = [...currentState.puppies];
      return { puppiesToDisplay: newPuppies };
    });
  };

  render() {
    if (this.state.puppiesToDisplay.length === 0) {
      this.showAllPuppies();
    }

    return (
      <div className="App">
        <Header name="FEND" />
        <Button method={this.showAllPuppies} text="Show All Puppies" />
        <br></br>
        <br></br>
        <Button method={this.sortByCuteness} text="Sort puppies by cuteness" />
        <br></br>

        <Dropdown filterPersonality={this.filterPersonality} />

        <List
          items={this.state.puppiesToDisplay}
          selectedPuppy={this.state.selectedPuppy}
          upvoteCuteness={this.upvoteCuteness}
          selectPuppy={this.selectPuppy}
          removePuppy={this.removePuppy}
        />
      </div>
    );
  }
}

export default App;
