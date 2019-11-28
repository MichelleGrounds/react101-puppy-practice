import React from "react";

const Dropdown = props => {
  return (
    <select
      className="puppyPersonalities"
      onChange={event => props.filterPersonality(event.target.value)}
    >
      <option value="ChoosePersonality">Choose a Personality</option>
      <option value="Hungry">Hungry</option>
      <option value="Sleepy">Sleepy</option>
      <option value="Energetic">Energetic</option>
      <option value="Cuddly">Cuddly</option>
    </select>
  );
};

export default Dropdown;
