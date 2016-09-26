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
    this.state = { currentTab : "Cursus", tabs : ["Cursus", "Experience", "Skills", "Projects"] };
  }

  handleOnTabClick(tabName : string) {
    this.state.currentTab = tabName;
  }

  render() {
    var currentTabStyle = {
      color : "white",
      background : "black"
    };

    var tabs : JSX.Element[]
    tabs = [];
    
    for(var tab in this.state.tabs) {
      if(this.state.tabs[tab] === this.state.currentTab) {
        tabs.push( <Link to={"/Resume/"+this.state.tabs[tab]}><th style={currentTabStyle}>{this.state.tabs[tab]}</th></Link> );
      } else {
        tabs.push( <Link onClick={this.handleOnTabClick.bind(this, this.state.tabs[tab])} to={"/Resume/"+this.state.tabs[tab]}><th>{this.state.tabs[tab]}</th></Link> );
      }
    }

    console.log(tabs);

    return (
      <div className="app">
        <Link to="/Resume" onClick={this.handleOnTabClick.bind(this, "Cursus")}><h1>Resume</h1></Link>
        <table>
          <tr>
            {tabs}
          </tr>
          <tr>
            <main>
              {this.props.children}
            </main>
          </tr>
        </table>
      </div>
    );
  }
}