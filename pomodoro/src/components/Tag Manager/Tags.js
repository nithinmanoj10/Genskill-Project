import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import reverseArray from "../functions/reverseArray";

import AddIcon from "@material-ui/icons/Add";
import CreateTag from "./CreateTag";
import TagCard from "./TagCard";
import EmptyTasks from "../Task Manager/EmptyTasks";

import RegularShowPoint from "../../images/Mordecai-Rigby-pointing.png";

function Tags() {
  const [tagColour, setTagColour] = useState("#000");
  const [tagName, setTagName] = useState("");
  const [createTag, setCreateTag] = useState("");

  const tagsData = JSON.parse(localStorage.getItem("tagsData") || "[]");
  const [tagData, setTagData] = useState([...tagsData]);

  const renderCreateTag = function () {
    setCreateTag(
      <CreateTag
        setTagData={setTagData}
        tagData={tagData}
        setCreateTag={setCreateTag}
      />
    );
  };

  return (
    <Router>
      <div className="task-section">
        <header className="task-section__header">
          <h2 className="heading">Tags</h2>
          <a
            href="javascript:void(0)"
            className="add-task"
            onClick={renderCreateTag}
          >
            <h4>New Tag</h4>
            <AddIcon className="add-task__icon" />
          </a>
        </header>
        <p className="warning">
          Recommended that you don't delete any tags and you choose a dark
          colour
        </p>

        {createTag}

        {tagsData.length === 0 ? (
          <EmptyTasks
            image={RegularShowPoint}
            text="C'mon, create tags so you can track your tasks and be more productive :O"
            alt="Moredecai and Rigby Pointing"
            height={300}
          />
        ) : (
          <div className="tag-gallery">
            {reverseArray(tagData).map(function (data) {
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
