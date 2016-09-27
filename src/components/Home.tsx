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
            <th><Link to="/Welcome"><h1>Index</h1></Link></th>
            <th><Link to="/Resume"><h1>Resume</h1></Link></th>
            <th><Link to="/Projects"><h1>Projects</h1></Link></th>
          </tr>
        </table>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}