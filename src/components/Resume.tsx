import * as React from "react";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";

export interface ResumeProps { }

export interface ResumeState { }

export class Resume extends React.Component<ResumeProps, ResumeState> {

  render() {
    return (
      <div className="app">
        <Link to="/"><h1>Resume</h1></Link>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}