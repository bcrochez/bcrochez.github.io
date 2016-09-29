import * as React from "react";
import { Link } from "react-router";

export interface WelcomeProps { }

export interface WelcomeState { }

export class Welcome extends React.Component<WelcomeProps, WelcomeState> {

  render() {
    return (
      <div className="welcome">
        <p>
          Welcome to my website !
        </p>
      </div>
    );
  }
}