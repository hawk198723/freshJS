import React from "react";

function FunctionClick() {
  function clickHandlar() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={clickHandlar}>Click function Component</button>
    </div>
  );
}

export default FunctionClick;
