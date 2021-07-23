import React from "react";
import { Link } from "react-router-dom";

function CloseWarningMessage() {
  return (
    <div className="overlay">
      <div className="close-warning">
        <p className="close-warning__message">
          Are you sure you want to go back? You might lose progress for the
          current interval
        </p>
        <div className="close-warning__action">
          <Link
            to="/pomodoro/timer/"
            className="close-warning__action__buttons close-warning__action__buttons--green"
          >
            Stay Here
          </Link>
          <Link
            to="/pomodoro/session-manager"
            className="close-warning__action__buttons close-warning__action__buttons--red"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CloseWarningMessage;
