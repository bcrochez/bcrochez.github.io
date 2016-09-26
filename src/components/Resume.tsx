import * as React from "react";
import { Link } from "react-router";

export interface ResumeProps { }

export interface ResumeState { }

export class Resume extends React.Component<ResumeProps, ResumeState> {

  render() {
    return (
      <div className="app">
        <Link to="/Resume"><h1>Resume</h1></Link>
        <div class="menu">
            <ul>
                <li><Link to="/Resume/Cursus">Cursus</Link></li>
                <li><Link to="/Resume/Experience">Experience</Link></li>
                <li><Link to="/Resume/Skills">Skills</Link></li>
            </ul>
        </div>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}