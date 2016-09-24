import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { Resume } from "./components/Resume";
import { ExperienceList } from "./components/ExperienceList";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Resume}>
            <IndexRoute component={ExperienceList} />
            <Route path="/:section" component={ExperienceList} />
        </Route>
    </Router>
    ), document.getElementById("main")
);
