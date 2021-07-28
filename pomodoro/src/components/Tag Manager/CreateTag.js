import React, { useState } from "react";
import { Link } from "react-router-dom";

import { tagsData, updateTagData } from "./TagsData";
import CloseIcon from "@material-ui/icons/Close";

function CreateTag(props) {
  const { setTagData, tagData } = props;

  const [tagColour, setTagColour] = useState("#000");
  const [tagName, setTagName] = useState("");

  const [errorMessage, setErrorMessage] = useState([]);

  const closeButtonHandle = function () {
    props.setCreateTag("");
  };

  const tagNameHandle = function (e) {
    setTagName(e.target.value);
  };

  const tagColourHandle = function (e) {
    setTagColour(e.target.value);
  };

  const tagSubmitHandle = function (e) {
    e.preventDefault();

    let valid = true;
    const errors = [];
    setErrorMessage(errors);

    if (tagName === "") {
      console.log("where name?");
      errors.push("You need to enter a Task Name");
      valid = false;
    }

    if (valid === true) {
      const newTag = {
        name: tagName,
        colour: tagColour,
        id: Math.random() * 100,
        tagTotalTime: 0,
      };

      tagData.push(newTag);
      localStorage.setItem("tagsData", JSON.stringify(tagData));
      setTagData([...tagData]);
      props.setCreateTag("");

      return;
    }

    console.log("erroror");
    setErrorMessage(errors);
  };

  return (
    <div className="tag-create">
      <form className="tag-create__form">
        <div className="tag-create__data">
          <ul className="errors" style={{ paddingLeft: "15", paddingTop: "0" }}>
            {errorMessage.map(function (error) {
              return <li className="errors__message">{error}</li>;
            })}
          </ul>
          <label htmlFor="tgname" className="tag-create__form__label">
            Tag Name <span className="important-asterisk">*</span>
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
          <a href="javascript:void(0)" onClick={closeButtonHandle}>
            <CloseIcon />
          </a>
        </div>
        <div className="tag-create__submit">
          <button
            className="input__button"
            type="submit"
            onClick={tagSubmitHandle}
          >
            <a href="javascript:void(0)" class="input__button__link">
              <h4>Create Tag</h4>
            </a>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTag;
