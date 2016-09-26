import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import { Home } from "./components/Home";
import { Resume } from "./components/Resume";
import { CursusList } from "./components/CursusList";
import { ExperienceList } from "./components/ExperienceList";
import { SkillList } from "./components/SkillList";

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/Resume" component={Resume}>
            <IndexRoute component={CursusList} />
            <Route path="/Resume/Cursus" component={CursusList} />
            <Route path="/Resume/Experience" component={ExperienceList} />
            <Route path="/Resume/Skills" component={SkillList} />
        </Route>
    </Router>
    ), document.getElementById("main")
);
