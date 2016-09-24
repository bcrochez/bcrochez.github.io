import * as React from "react";
import { Link } from "react-router";

export interface SkillListProps { }

export interface SkillListState { }

export class SkillList extends React.Component<SkillListProps, SkillListState> {

  render() {
    return (
      <div className="skills">
        <Link to="/Skills"><h3>Skills</h3></Link>
        My skills
      </div>
    );
  }
}