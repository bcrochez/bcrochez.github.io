import * as React from "react";
import { Link } from "react-router";

export interface ExperienceListProps { }

export interface ExperienceListState { }

export class ExperienceList extends React.Component<ExperienceListProps, ExperienceListState> {

  render() {
    return (
      <div className="experience">
        <Link to="/Resume/Experience"><h3>Experience</h3></Link>
        My experiencies
      </div>
    );
  }
}