import * as React from "react";
import { Link } from "react-router";

export interface ProjectListProps { }

export interface ProjectListState { }

export class ProjectList extends React.Component<ProjectListProps, ProjectListState> {

  render() {
    return (
      <div className="projects">
        <h2>School projects</h2>
        <ul>
          <li>Scrabble solver</li>
          <li>Journal application</li>
          <li>Travelling salesman problem</li>
          <li>Application for distribued computing</li>
        </ul>

        <h2>Personal projects</h2>
        <ul>
          <li>IRC bot</li>
          <li>My website</li>
          <li><a href="./javascript-samples">Some JavaScript samples</a></li>
        </ul>

        <h3><a href="https://github.com/bcrochez">More on GitHub</a></h3>
      </div>
    );
  }
}