import * as React from "react";
import { Link } from "react-router";

export interface WelcomeProps { }

export interface WelcomeState { }

export class Welcome extends React.Component<WelcomeProps, WelcomeState> {

  render() {
    return (
      <div className="welcome">
        Welcome to my website !
      </div>
    );
  }
}