function getMessages() {
  const msgElm = document.getElementById("messages");
  return msgElm.children;
}

function getActiveMessage(messages) {
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].classList.contains("show")) {
      return i;
    }
  }
}

function setMessage(action = "increase") {
  const messages = getMessages();
  let messageIndex = getActiveMessage(messages);
  let oldIndex = messageIndex;

  messages[messageIndex].classList.remove("show");
  messageIndex = action === "increase" ? messageIndex + 1 : messageIndex - 1;
  messageIndex = messageIndex % messages.length;
  messages[messageIndex].classList.add("show");
  return [oldIndex, messageIndex];
}

function updateExampleStatus(oldIndex, stepIndex) {
  document.getElementById("central-cell").classList.remove(`step-${oldIndex}`);
  document.getElementById("central-cell").classList.add(`step-${stepIndex}`);
  document
    .getElementById("central-cell-shadow")
    .classList.remove(`step-${oldIndex}`);
  document
    .getElementById("central-cell-shadow")
    .classList.add(`step-${stepIndex}`);
}

document.getElementById("right-arrow").addEventListener("click", () => {
  const [oldIndex, stepIndex] = setMessage("increase");
  updateExampleStatus(oldIndex, stepIndex);
});

document.getElementById("left-arrow").addEventListener("click", () => {
  const [oldIndex, stepIndex] = setMessage("decrease");
  updateExampleStatus(oldIndex, stepIndex);
});
