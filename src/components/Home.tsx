import * as React from "react";
import { Link } from "react-router";

export interface HomeProps { }

export interface HomeState { }

export class Home extends React.Component<HomeProps, HomeState> {

  render() {
    return (
      <div>
        <Link to="/Experiencies"><h2>Experiencies</h2></Link>
        <Link to="/Skills"><h2>Skills</h2></Link>
      </div>
    );
  }
}