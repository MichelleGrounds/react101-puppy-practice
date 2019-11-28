import React from 'react';

const List = props => {
  const puppies = props.items;
  const showImages = props.showImages;
  return (
    <ul>
      {puppies.map(puppy => {
        return (
          <li key={puppy.name}>
            <p>{puppy.name}</p>
            {showImages && <img src={puppy.img} alt="cute pup" />}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
