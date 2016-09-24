import * as React from "react";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";

export interface ExperienceListProps { }

export interface ExperienceListState { }

export class ExperienceList extends React.Component<ExperienceListProps, ExperienceListState> {

  render() {
    return (
      <div className="experiences">
        <h3>Experiences</h3>
        My experiences
      </div>
    );
  }
}