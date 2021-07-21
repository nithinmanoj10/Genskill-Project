import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import CreateSession from "./CreateSession";

function SessionManager() {
  return (
    <Router>
      <div className="task-manager">
        <div className="task-section">
          <header className="task-section__header">
            <h2 className="heading">Sessions</h2>
            <Link
              to="/Genskill-Project/Session-Manager/create-tag"
              className="add-task"
            >
              <h4>New Session</h4>
              <AddIcon className="add-task__icon" />
            </Link>
          </header>
          <Switch>
            <Route path="/Genskill-Project/Session-Manager/create-tag">
              <CreateSession />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default SessionManager;
