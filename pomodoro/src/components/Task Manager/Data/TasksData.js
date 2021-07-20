const updateTasksData = function (newTasksData) {
  tasksData = newTasksData;
};

let tasksData = [
  {
    task_title: "Complete Assignment",
    task_tag: "React",
    task_estimate: "90",
    task_desc: "Practice all the questions and submit it",
    task_isCompleted: false,
    task_startDate: "2th, July",
    task_endDate: "-",
    task_id: 23,
  },
  {
    task_title: "Learn OOP",
    task_tag: "JavaScript",
    task_estimate: "45",
    task_desc: "Go through all the concepts of OOP",
    task_isCompleted: false,
    task_startDate: "5th, July",
    task_endDate: "-",
    task_id: 25,
  },
];

export { tasksData, updateTasksData };
