import React, { Component } from "react";

export default class CreateTask extends Component {
  render() {
    return (
      <div className="task-create">
        <h4 className="task-create__heading">Create Task</h4>
        <form className="task-create__form">
          <label htmlFor="ttitle" className="task-create__form__label">
            Task Title
          </label>
          <input
            type="text"
            name="tasktitle"
            id="ttitle"
            placeholder="Your Task Title"
            className="input__text"
          />
          <label htmlFor="ttag" className="task-create__form__label">
            Tag
          </label>
          <select
            name="tasktag"
            id="ttag"
            className="task-create__form__select"
          >
            <option value="react">React</option>
            <option value="javascript">JavaScript</option>
            <option value="css">CSS</option>
          </select>
          <label htmlFor="testimate" className="task-create__form__label">
            Estimated Time to Complete
          </label>
          <input
            type="text"
            name="taskestimate"
            id="testimate"
            placeholder="Time in Minutes"
            className="input__text"
          />

          <label htmlFor="tdescription" className="task-create__form__label">
            Description
          </label>
          <textarea
            name="taskdescription"
            id="tdescription"
            cols="35"
            rows="4"
            placeholder="Description for your Task..."
            className="task-create__form__description"
          ></textarea>

          <input type="submit" value="Create Task" className="input__button" />
        </form>
      </div>
    );
  }
}
