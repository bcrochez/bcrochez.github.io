import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { Resume } from "./components/Resume";
import { Home } from "./components/Home";
import { ExperienceList } from "./components/ExperienceList";
import { SkillList } from "./components/SkillList";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Resume}>
            <IndexRoute component={Home} />
            <Route path="/Experiencies" component={ExperienceList} />
            <Route path="/Skills" component={SkillList} />
        </Route>
    </Router>
    ), document.getElementById("main")
);
