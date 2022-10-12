import React from "react";

function FunctionClick() {
  function clickHandlar() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={clickHandlar}>Click</button>
    </div>
  );
}

export default FunctionClick;
