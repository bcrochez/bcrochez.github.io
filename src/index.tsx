import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { Resume } from "./components/Resume";
import { ExperienceList } from "./components/ExperienceList";
import { SkillList } from "./components/SkillList";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Resume}>
            <IndexRoute component={ExperienceList} />
            <Route path="/Experiencies" component={ExperienceList} />
            <Route path="/Skills" component={SkillList} />
        </Route>
    </Router>
    ), document.getElementById("main")
);
