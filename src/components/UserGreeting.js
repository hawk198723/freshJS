import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    const { isLoggedIn } = this.state;

    // return isLoggedIn && <div>Welcome Jason</div>;

    return isLoggedIn ? <div>Welcome Jason</div> : <div>Welcome Guest</div>;

    // let message;
    // if (isLoggedIn) {
    //   message = <div>Welcome Jason</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    //

    // if (isLoggedIn) {
    //   return (
    //     <div>
    //       <div>Welcome Jason</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Guest </div>
    //     </div>
    //   );
    // }
    // return (
    //   <div>
    //     <div>Welcome Jason</div>
    //     <div>Welcome Guest </div>
    //   </div>
    // );
  }
}

export default UserGreeting;
