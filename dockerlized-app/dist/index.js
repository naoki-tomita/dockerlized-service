const newUserInput = document.getElementById("new-user");
const addButton = document.getElementById("add");
const usersList = document.getElementById("users");

function getInputText() {
  return newUserInput.value;
}

function clearInputText() {
  newUserInput.value = "";
}

function appendUserElement(user) {
  const userEl = document.createElement("li");
  userEl.innerText = `id: ${user.id}, name: ${user.name}`;
  usersList.appendChild(userEl);
}

async function addUser(name) {
  const result = await fetch("/api/users", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (result.ok) {
    const user = await result.json();
    appendUserElement(user);
  }
}

async function updateUserList() {
  const result = await fetch("/api/users");
  if (result.ok) {
    const users = await result.json();
    users.forEach(appendUserElement);
  }
}

function setupEvents() {
  addButton.addEventListener("click", async () => {
    const name = getInputText();
    await addUser(name);
  });
}

async function main() {
  setupEvents();
  await updateUserList();
}

main();