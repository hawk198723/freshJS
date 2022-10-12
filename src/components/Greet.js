import React from "react";

// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         hello {props.name} a.k.a. {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

//first type of destrucuring in perameter
// const Greet = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         hello {name} a.k.a. {heroName}
//       </h1>
//     </div>
//   );
// };
//second type of destrucuring in perameter
const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        hello {name} a.k.a. {heroName}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
