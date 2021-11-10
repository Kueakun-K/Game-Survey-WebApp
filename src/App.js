import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Navbar from "./navbar";

import Main from './Page/main';
import Contact from './Page/contact';
import Typeofgame from './Page/typeofgame';
import Page1 from "./Page/question";
import Page2 from "./Page/question2";
import Page3 from './Page/question3';
import Result from './Page/result';
import Stat from './Page/stat';

import Adventure from './result/Adventure';
import Fighting from './result/Fighting';
import Horror from './result/Horror';
import Moba from './result/Moba';
import Puzzle from './result/Puzzle';
import RPG from './result/RPG';
import Shooting from './result/Shooting';
import Simulation from './result/Simulation';
import Sport from './result/Sport';
import Strategy from './result/Strategy';

export default function App()  {
  return (
    <div>
       <Router>
       <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />

          <Route exact path ="/contact" component = {Contact} />

          <Route exact path ="/typeofgame" component = {Typeofgame} />
         
          <Route exact path="/page1" component={Page1} />

          <Route exact path="/page2" component={Page2} />

          <Route exact path="/page3" component={Page3} />

          <Route exact path="/result" component={Result} />

          <Route exact path="/stat" component={Stat} />

          <Route exact path="/result/adventure" component={Adventure} />
          <Route exact path="/result/Fighting" component={Fighting} />
          <Route exact path="/result/Horror" component={Horror} />
          <Route exact path="/result/Moba" component={Moba} />
          <Route exact path="/result/Puzzle" component={Puzzle} />
          <Route exact path="/result/RPG" component={RPG} />
          <Route exact path="/result/Shooting" component={Shooting} />
          <Route exact path="/result/Simulation" component={Simulation} />
          <Route exact path="/result/Sport" component={Sport} />
          <Route exact path="/result/Strategy" component={Strategy} />
        </Switch>
        </Router>
    </div>
  );
}


