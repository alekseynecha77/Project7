const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

const popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}




send.addEventListener("click", () =>{
if(user.value === "" && message.value === ""){
alert("Please fill out user and message fields before sending");

}else if(user.value === ""){
  alert('Please fill out user field before sending');
}
else if(message.value === ""){
  alert('Please fill out message field before sending"');
}
else{
  alert(`Message successfully sent to: ${user.value}`);
}

});