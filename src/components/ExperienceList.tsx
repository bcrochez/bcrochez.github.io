import * as React from "react";
import { Link } from "react-router";

export interface ExperienceListProps { }

export interface ExperienceListState { }

export class ExperienceList extends React.Component<ExperienceListProps, ExperienceListState> {

  render() {
    return (
      <div className="experience">
        <Link to="/Resume/Experience"><h3>Experience</h3></Link>
        <ul>
          <li>2016 - Internship in the Laboratoire d'Informatique Gaspard Monge (LIGM) - Probabilist real-time system scheduling <br/> <i>Implementation of scheduling algorithms into a real-time simulator in Pyhton</i></li>
          <li>2015 - Internship in CDIP - Mobile device applications developpement <br/> <i>Implementation of mini-games in JavaScript and native Android applications</i></li>
        </ul>
      </div>
    );
  }
}