import * as React from "react";
import { Link } from "react-router";

export interface SkillProps {
    name: string;
    rating: number;
 }

export interface SkillState { }

export class Skill extends React.Component<SkillProps, SkillState> {

    constructor(props: SkillProps, context: any) {
        super(props, context);
    }

  render() {
    return (
        <tr>
            <td>
                {this.props.name}
            </td>
            <td>
                <progress value={this.props.rating.toString()} max="5" />
            </td>
        </tr>
    );
  }
}