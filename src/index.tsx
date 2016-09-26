import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import { Resume } from "./components/Resume";
import { ExperienceList } from "./components/ExperienceList";
import { SkillList } from "./components/SkillList";

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/Resume" component={Resume}>
            <IndexRoute component={ExperienceList} />
            <Route path="/Resume/Experience" component={ExperienceList} />
            <Route path="/Resume/Skills" component={SkillList} />
        </Route>
    </Router>
    ), document.getElementById("main")
);
