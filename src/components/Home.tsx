import * as React from "react";
import { Link } from "react-router";

export interface HomeProps { }

export interface HomeState { }

export class Home extends React.Component<HomeProps, HomeState> {

  render() {
    return (
      <div className="home">
        <table>
          <tr>
            <Link to="/Welcome"><th className="home-tab">Index</th></Link>
            <Link to="/Resume"><th className="home-tab">Resume</th></Link>
            <Link to="/Projects"><th className="home-tab">Projects</th></Link>
            <Link to="/Contact"><th className="home-tab">Contact</th></Link>
          </tr>
        </table>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}