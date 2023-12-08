// const tasks = [];

// const addTask = (task) => {
//   tasks.push({
//     task: task,
//     completed: false,
//   });
// };

// const removeTask = (index) => {
//   tasks.splice(index, -1, 1);
// };

// const completedTask = (index) => {
//   tasks[index - 1].completed = true;
// };

// const tasksList = () => {
//   tasks.forEach((task, index) => {
//     console.log(`${index + 1}.`, task.completed ? "✅" : "⬛", task.task);
//   });
// };

const readline = require("readline");
const tasks = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addTask(task) {
  tasks.push({ task, completed: false });
  console.log(`Task added: ${task}`);
}

function removeTask(index) {
  if (tasks[index]) {
    tasks.splice(index, -1, 1);
    console.log(`Task at index ${index} removed`);
  } else {
    console.log(`Invalid task index: ${index}`);
  }
}

function complatedTask(index) {
  if (tasks[index]) {
    tasks[index].completed = !tasks[index].completed;
    console.log(
      `Task at index ${index} marked ${
        tasks[index].completed ? "completed" : "incomplete"
      }`
    );
  } else {
    console.log(`Invalid task index: ${index}`);
  }
}

const tasksList = () => {
  tasks.forEach((task, index) => {
    console.log(`${index + 1}.`, task.completed ? "✅" : "⬛", task.task);
  });
};

function mainLoop() {
  rl.question(
    "Enter command (add, remove, complete, list, exit): ",
    (command) => {
      switch (command.trim().toLowerCase()) {
        case "add":
          rl.question("Enter task: ", (task) => {
            addTask(task);
            mainLoop();
          });
          break;
        case "remove":
          rl.question("Enter task index: ", (index) => {
            removeTask(parseInt(index));
            mainLoop();
          });
          break;
        case "complete":
          rl.question("Enter task index: ", (index) => {
            complatedTask(parseInt(index));
            mainLoop();
          });
          break;
        case "list":
          tasksList();
          mainLoop();
          break;
        case "exit":
          rl.close();
          break;
        default:
          console.log("Invalid command");
          mainLoop();
      }
    }
  );
}

console.log(
  "------------------------------------------------->CLI Todo List------------------------------------------------>"
);
mainLoop();
