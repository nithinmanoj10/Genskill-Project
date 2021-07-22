import React, { useState } from "react";
import { Link } from "react-router-dom";

import { tagsData, updateTagData } from "./TagsData";
import CloseIcon from "@material-ui/icons/Close";

function CreateTag(props) {
  const { tagColour, setTagColour, tagName, setTagName, setTagData, tagData } =
    props;

  const tagNameHandle = function (e) {
    setTagName(e.target.value);
  };

  const tagColourHandle = function (e) {
    setTagColour(e.target.value);
  };

  const tagSubmitHandle = function () {
    const newTag = {
      name: tagName,
      colour: tagColour,
      id: Math.random() * 100,
    };

    tagData.push(newTag);
    localStorage.setItem("tagsData", JSON.stringify(tagData));
    setTagData([...tagData]);
  };

  return (
    <div className="tag-create">
      <form className="tag-create__form">
        <div className="tag-create__data">
          <label htmlFor="tgname" className="tag-create__form__label">
            Tag Name
          </label>
          <input
            type="text"
            name="TagName"
            id="tgname"
            className="input__text"
            onChange={tagNameHandle}
          />
          <label htmlFor="tgcolour" className="tag-create__form__label">
            Tag Colour
          </label>
          <div className="input__colour">
            <input
              type="color"
              name="TagColour"
              id="tgcolour"
              className="input__colour__picker"
              onChange={tagColourHandle}
            />
          </div>
        </div>
        <div className="tag-create__close">
          <Link to="/task-manager/tags">
            <CloseIcon />
          </Link>
        </div>
        <div className="tag-create__submit">
          <button
            className="input__button"
            type="submit"
            onClick={tagSubmitHandle}
          >
            <Link to="/task-manager/tags" class="input__button__link">
              <h4>Create Tag</h4>
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTag;
