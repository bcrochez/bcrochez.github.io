import * as React from "react";
import { Link } from "react-router";

export interface CursusListProps { }

export interface CursusListState { }

export class CursusList extends React.Component<CursusListProps, CursusListState> {

  render() {
    return (
      <div className="cursus">
        <Link to="/Resume/Cursus"><h3>Cursus</h3></Link>
        <ul>
            <li>2016 - <strong>Master Logiciel</strong> à l'Université Paris-Est Marne-la-Vallée (U-PEM) - <i>Mention Bien</i></li>
            <li>2014 - <strong>Licence Informatique</strong> à l'U-PEM - <i>Mention Assez Bien</i></li>
            <li>2010 - <strong>Baccalauréat Scientifique</strong> - <i>Mention Assez Bien</i></li>
        </ul>
      </div>
    );
  }
}