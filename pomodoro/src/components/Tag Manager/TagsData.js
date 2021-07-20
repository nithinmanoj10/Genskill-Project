const updateTagData = function (newObject) {
  tagsData.push(newObject);
};

let tagsData = [
  {
    name: "Study",
    colour: "#e3e",
  },
  {
    name: "Work",
    colour: "#123",
  },
  {
    name: "Play",
    colour: "#8e4",
  },
  {
    name: "Sleep",
    colour: "#aa2",
  },
  {
    name: "Eat",
    colour: "#2aa",
  },
];

export { tagsData, updateTagData };
