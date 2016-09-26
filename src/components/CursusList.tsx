import * as React from "react";
import { Link } from "react-router";

export interface CursusListProps { }

export interface CursusListState { }

export class CursusList extends React.Component<CursusListProps, CursusListState> {

  render() {
    return (
      <div className="cursus">
        <Link to="/Resume/Cursus"><h3>Cursus</h3></Link>
        My cursus
      </div>
    );
  }
}