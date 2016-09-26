import * as React from "react";
import { Link } from "react-router";

export interface HomeProps { }

export interface HomeState { }

export class Home extends React.Component<HomeProps, HomeState> {

  render() {
    return (
      <div className="home">
        <Link to="/Resume"><h2>Resume</h2></Link>
      </div>
    );
  }
}