import * as React from "react";
import { Link } from "react-router";

export interface ResumeProps { 
  tabs : string[];
}

export interface ResumeState { 
  currentTab : string;
}

export class Resume extends React.Component<ResumeProps, ResumeState> {

  getDefaultProps() {
    return { tabs : [ "Cursus", "Experience", "Skills", "Projects" ] };
  }

  getInitialState() {
    return { currentTab : "Cursus" };
  }

  handleOnClickTab(tabName : string) {
    this.setState({ currentTab : tabName });
  }

  render() {
    return (
      <div className="app">
        <Link to="/Resume"><h1>Resume</h1></Link>
        <div class="menu">
            <table>
                <tr>
                  <Link to="/Resume/Cursus"><th>Cursus</th></Link>
                  <Link to="/Resume/Experience"><th>Experience</th></Link>
                  <Link to="/Resume/Skills"><th>Skills</th></Link>
                  <Link to="/Resume/Projects"><th>Projects</th></Link>
                </tr>
            </table>
        </div>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}