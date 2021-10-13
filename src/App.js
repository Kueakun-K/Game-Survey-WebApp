import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Page1 from "./Page/question";
import Page2 from "./Page/question2";
import Result from './Page/result';
import Modal from './PopupModel/modal';

export default function App()  {
  // const [sata,setSata] = React.useState({})
  // const data = "Hello Everyone";
  return (
    <div>
       <Router>
        <Switch>
          <Route exact path="/" component={Page1} />
         
          <Route exact path="/page2" component={Page2} />

          <Route exact path="/result" component={Result} />
        
          <Route exact path="/modal" component={Modal}/>

        </Switch>
        </Router>
    </div>
  );
}


