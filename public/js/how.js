function getMessages(id = "messages") {
  const msgElm = document.getElementById(id);
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
  const contextMessages = getMessages("Context");
  let messageIndex = getActiveMessage(messages);
  let oldIndex = messageIndex;

  if (messageIndex === 0 && action === "decrease") {
    return;
  }
  if (messageIndex === messages.length - 1 && action === "increase") {
    return;
  }

  messages[messageIndex].classList.remove("show");
  contextMessages[messageIndex].classList.remove("show");
  messageIndex = action === "increase" ? messageIndex + 1 : messageIndex - 1;

  messageIndex = messageIndex % messages.length;
  messages[messageIndex].classList.add("show");
  contextMessages[messageIndex].classList.add("show");

  if (messageIndex === 0) {
    document.getElementById("left-arrow").classList.add("hide");
    return;
  } else {
    document.getElementById("left-arrow").classList.remove("hide");
  }
  if (messageIndex === messages.length - 1) {
    document.getElementById("right-arrow").classList.add("hide");
    return;
  } else {
    document.getElementById("right-arrow").classList.remove("hide");
  }

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
