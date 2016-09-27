import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import { Home } from "./components/Home";
import { Welcome } from "./components/Welcome";
import { Resume } from "./components/Resume";
import { CursusList } from "./components/CursusList";
import { ExperienceList } from "./components/ExperienceList";
import { SkillList } from "./components/SkillList";
import { ProjectList } from "./components/ProjectList";

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Home} >

            <IndexRoute component={Welcome} />

            <Route path="/Welcome" component={Welcome} />
            <Route path="/Resume" component={Resume}>

                <IndexRoute component={CursusList} />

                <Route path="/Resume/Cursus" component={CursusList} />
                <Route path="/Resume/Experience" component={ExperienceList} />
                <Route path="/Resume/Skills" component={SkillList} />

            </Route>

            <Route path="/Projects" component={ProjectList} />

        </Route>
    </Router>
    ), document.getElementById("main")
);
