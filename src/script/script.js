const messages = [];
const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");
const textInput = document.getElementById("message");
const btnInput = document.getElementById("inputBtn");
const messageList = document.getElementById("messageList");
let index = 0;

class Message {
  constructor(messageID, nameParam, mailParam, messageParam) {
    this.id = messageID;
    this.name = nameParam;
    this.mail = mailParam;
    this.message = messageParam;
  }
}

/** LISTENER */
if (btnInput) {
  btnInput.addEventListener("click", addMessage);
} else {
  console.log("Sorry, can't find btnInput");
}
if (textInput) {
  textInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      btnInput.click();
    }
  });
}

/** ADD MESSAGE FUNCTION */
function addMessage() {
  let id = "";
  let name = "";
  let mail = "";
  let messageValue = "";

  if (textInput.value.length >= 10) {
    id = setID("message", index++);
    name = nameInput.value;
    mail = mailInput.value;
    messageValue = textInput.value;
    let newMessage = new Message(id, name, mail);

    messages.push(newMessage);

    renderMessages(id, messageValue, newMessage);

    nameInput.value = "";
    mailInput.value = "";
    textInput.value = "";
  } else {
    alert(
      "Your message is to short. please try again with more than 10 characters"
    );
  }
}

function setID(name, idLocal) {
  return name + idLocal;
}

function renderMessages(messageID, messageValue, newMessage) {
  const newMessageLi = document.createElement("li");
  newMessageLi.messageObj = newMessage;

  const label = document.createElement("label");
  const labelValue = document.createTextNode(messageValue);
  label.append(labelValue);
  label.setAttribute("class", "messageLabel");
  label.setAttribute("for", messageID);
  newMessageLi.appendChild(label);

  messageList.appendChild(newMessageLi);
}
