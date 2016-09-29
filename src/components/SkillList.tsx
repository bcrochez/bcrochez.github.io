import * as React from "react";
import { Link } from "react-router";

import { Skill } from "./Skill";

export interface SkillListProps { }

export interface SkillListState {
  skills: any;
 }

export class SkillList extends React.Component<SkillListProps, SkillListState> {

  constructor(props: SkillListProps, context: any) {
    super(props, context);
    this.state = { skills : [
      { name : 'Android', rating : "3" },
      { name : 'C', rating : "4" },
      { name : 'C++', rating : "3" },
      { name : 'HTML5/CSS3', rating : "4" },
      { name : 'Java', rating : "5" },
      { name : 'JavaScript', rating : "4" },
      { name : 'JEE', rating : "3"},
      { name : 'MySQL', rating : "3" },
      { name : 'OCaml', rating : "2" },
      { name : 'PHP', rating : "3" },
      { name : 'Python', rating : "5" },
      { name : 'TypeScript & React', rating : "2"},
    ] };
  }

  render() {
    var skills = this.state.skills.map(function(skill : any) {
      return(
        <Skill name={skill.name} rating={skill.rating} />
      );
    });
    return (
      <div className="skills">
        <h3>My skills</h3>
        <table>
          {skills}
        </table>
      </div>
    );
  }
}