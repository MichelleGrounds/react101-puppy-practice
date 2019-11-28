import React from "react";

const List = props => {
  const puppiesToDisplay = props.items;
  const selectedPuppy = props.selectedPuppy;
  return (
    <ul>
      {puppiesToDisplay.map(puppy => {
        return (
          <li key={puppy.name}>
            <p>{puppy.name}</p>
            {selectedPuppy === puppy.name && (
              <img src={puppy.img} alt="cute pup" />
            )}
            <p>cuteness: {puppy.cuteness}</p>
            <button
              id={puppy.name}
              onClick={event => props.selectPuppy(puppy.name)}
            >
              Select Pup
            </button>
            <button
              onClick={event => props.upvoteCuteness(puppy.name)}
              id={props.selectedPuppy}
            >
              Upvote Cuteness
            </button>
            <button
              onClick={event => props.removePuppy(puppy.name)}
              id={props.selectedPuppy}
            >
              Send Puppy to the farm
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
