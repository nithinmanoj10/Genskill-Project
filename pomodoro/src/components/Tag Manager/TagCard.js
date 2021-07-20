import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

function TagCard({ name, colour, id, tagData, setTagData }) {
  console.log(name, colour, id, tagData, setTagData);

  const deleteTagHandle = function () {
    const newTagData = tagData.filter(function (tag) {
      if (tag.id !== id) {
        return tag;
      }
    });
    setTagData([...newTagData]);
    localStorage.setItem("tagsData", JSON.stringify(newTagData));
  };

  const colorStyles = {
    backgroundColor: colour,
  };

  return (
    <div className="tag-card">
      <div className="tag-card__colour" style={colorStyles}></div>
      <h3 className="tag-card__name">{name}</h3>
      <div className="tag-card__close">
        <CloseIcon
          className="tag-card__close__icon"
          onClick={deleteTagHandle}
        />
      </div>
    </div>
  );
}

export default TagCard;
