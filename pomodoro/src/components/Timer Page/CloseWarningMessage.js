import React from "react";

function CloseWarningMessage() {
  return (
    <div className="close-warning">
      <p className="close-warning__message">
        Are you sure you want to go back. You might lose progress for this
        interval
      </p>

      <div className="close-warning__action">
        <a
          href="javascript:void(0)"
          className="close-warning__action__buttons close-warning__action__buttons--green"
        >
          Stay Here
        </a>
        <a
          href="javascript:void(0)"
          className="close-warning__action__buttons close-warning__action__buttons--red"
        >
          Go Back
        </a>
      </div>
    </div>
  );
}

export default CloseWarningMessage;
