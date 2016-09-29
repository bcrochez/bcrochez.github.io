import * as React from "react";
import { Link } from "react-router";

export interface SkillProps {
    name: string;
    rating: string;
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
                <progress max="5" value={this.props.rating} />
            </td>
        </tr>
    );
  }
}