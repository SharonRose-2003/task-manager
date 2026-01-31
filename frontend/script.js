const API_URL = "http://localhost:5000/tasks";
window.onload = fetchTasks;
function fetchTasks() {
  fetch(API_URL)
    .then(res => res.json())
    .then(tasks => {
      const list = document.getElementById("taskList");
      list.innerHTML = "";

      tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${task.title}</span>
          <button onclick="deleteTask('${task._id}')">Delete</button>
        `;
        list.appendChild(li);
      });
    });
}
function addTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      description
    })
  })
  .then(() => {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    fetchTasks();
  });
}

function deleteTask(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
  .then(() => fetchTasks());
}
