import * as React from "react";
import { Link } from "react-router";

export interface ProjectListProps { }

export interface ProjectListState { }

export class ProjectList extends React.Component<ProjectListProps, ProjectListState> {

  render() {
    return (
      <div className="projects">
        <Link to="/Resume/Projects"><h3>Projects</h3></Link>
        My projects
      </div>
    );
  }
}