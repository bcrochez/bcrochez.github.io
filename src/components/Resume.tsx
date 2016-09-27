import * as React from "react";
import { Link } from "react-router";

export interface ResumeProps { }

export interface ResumeState { 
  currentTab : string;
  tabs : string[];
}

export class Resume extends React.Component<ResumeProps, ResumeState> {

  constructor(props : ResumeProps, context : any) {
    super(props, context);
    this.state = { currentTab : "Cursus", tabs : ["Cursus", "Experience", "Skills"] };
  }

  handleOnTabClick(tabName : string) {
    this.state.currentTab = tabName;
  }

  render() {
    var tabs : JSX.Element[]
    tabs = [];
    
    for(var tab in this.state.tabs) {
      if(this.state.tabs[tab] === this.state.currentTab) {
        tabs.push( <Link to={"/Resume/"+this.state.tabs[tab]}><th className="selected-tab">{this.state.tabs[tab]}</th></Link> );
      } else {
        tabs.push( <Link onClick={this.handleOnTabClick.bind(this, this.state.tabs[tab])} to={"/Resume/"+this.state.tabs[tab]}><th className="resume-tab">{this.state.tabs[tab]}</th></Link> );
      }
    }

    console.log(tabs);

    return (
      <div className="app">
        <Link to="/Resume" onClick={this.handleOnTabClick.bind(this, "Cursus")}><h2>Resume</h2></Link>
        <table>
          <tr>
            {tabs}
          </tr>
          <tr>
            <td>
              <main>
                {this.props.children}
              </main>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}