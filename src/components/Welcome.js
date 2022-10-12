import React from "react";

const Welcome = (props) => {
  const { name, heroName } = props;
  // const { state1, state2 } = this.state;
  return (
    <div>
      <h1>
        welcome {name} aka {heroName}
      </h1>
    </div>
  );
};

export default Welcome;
