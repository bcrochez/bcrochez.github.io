import * as React from "react";
import { Link } from "react-router";

export interface ProjectListProps { }

export interface ProjectListState { }

export class ProjectList extends React.Component<ProjectListProps, ProjectListState> {

  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="./javascript-samples">Some JavaScript samples</a></li>
          <li>Coming soon...</li>
        </ul>
      </div>
    );
  }
}