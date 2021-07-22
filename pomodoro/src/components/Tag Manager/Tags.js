import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import CreateTag from "./CreateTag";
import TagCard from "./TagCard";
import EmptyTasks from "../Task Manager/EmptyTasks";

import RegularShowPoint from "../../images/Mordecai-Rigby-pointing.png";

function Tags() {
  const [tagColour, setTagColour] = useState("#000");
  const [tagName, setTagName] = useState("");

  const tagsData = JSON.parse(localStorage.getItem("tagsData") || "[]");
  const [tagData, setTagData] = useState([...tagsData]);

  return (
    <Router>
      <div className="task-section">
        <header className="task-section__header">
          <h2 className="heading">Tags</h2>
          <Link to="/taskmanager/tags/create-tag" className="add-task">
            <h4>New Tag</h4>
            <AddIcon className="add-task__icon" />
          </Link>
        </header>
        <p className="warning">
          Recommended that you don't delete any tags and you choose a dark
          colour
        </p>

        <Switch>
          <Route path="/taskmanager/tags/create-tag">
            <CreateTag
              tagColour={tagColour}
              setTagColour={setTagColour}
              tagName={tagName}
              setTagName={setTagName}
              setTagData={setTagData}
              tagData={tagData}
            />
          </Route>
        </Switch>

        {tagsData.length === 0 ? (
          <EmptyTasks
            image={RegularShowPoint}
            text="C'mon, create tags so you can track your tasks and be more productive :O"
            alt="Moredecai and Rigby Pointing"
          />
        ) : (
          <div className="tag-gallery">
            {tagData.map(function (data) {
              return (
                <TagCard
                  name={data.name}
                  colour={data.colour}
                  id={data.id}
                  setTagData={setTagData}
                  tagData={tagData}
                />
              );
            })}
          </div>
        )}
      </div>
    </Router>
  );
}

export default Tags;
