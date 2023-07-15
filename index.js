var group = document.getElementById("my-group");
var messageTemplate = document.getElementsByClassName("me")[0];
var inputBox = document.getElementById("app-inpt");

function enterMessage(){
  if (isBlank(inputBox.value)) return;
  group.style.display = "flex";
  var newMessage = messageTemplate.cloneNode(true);
  newMessage.style.display = "block";
  newMessage.children[0].textContent = inputBox.value;
  inputBox.value = "";
  group.appendChild(newMessage);
}

function isBlank(str) {
  return (!str || /^\s*$/.test(str));
}