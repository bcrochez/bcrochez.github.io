import * as React from "react";
import { Link } from "react-router";

export interface SkillListProps { }

export interface SkillListState { }

export class SkillList extends React.Component<SkillListProps, SkillListState> {

  render() {
    return (
      <div className="skills">
        <h3>My skills</h3>
        Coming soon...
      </div>
    );
  }
}