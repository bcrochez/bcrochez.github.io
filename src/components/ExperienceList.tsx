import * as React from "react";
import { Link } from "react-router";

export interface ExperienceListProps { }

export interface ExperienceListState { }

export class ExperienceList extends React.Component<ExperienceListProps, ExperienceListState> {

  render() {
    return (
      <div className="experiencies">
        <Link to="/Experiencies"><h3>Experiencies</h3></Link>
        My experiencies
      </div>
    );
  }
}