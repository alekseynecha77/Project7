const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const saveLocal = document.getElementById('save')

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

// document.querySelector('svg .IconsNAV').onclick = changeColor;

// function changeColor(){

//   document.style.fill = "black";
//   return false;
  
// }

// const arr= [IconsNave];

// const changeONclick = document.querySelector('svg #IconsNav');

// changeONclick.addEventListener('click', function onClick() {
//   changeONclick.style.fill = 'white';

// })
const btnHome = document.querySelector('#HomeIcon');
const btnChart = document.querySelector('#ChartIcon');

const btnMember = document.querySelector('#MembersIcon');

const btnSetting = document.querySelector('#SettingIcon');


btnHome.addEventListener('click', () => {
  if(document.getElementById('HomeIcon').clicked == true){
  btnHome.style.fill = "black";
   } else{
    btnHome.style.fill = "white";

  }

})
btnChart.addEventListener('click', () => {
  if(document.getElementById('ChartIcon').clicked == true){
    btnChart.style.fill = "black";
     } else{
      btnChart.style.fill = "white";
  
    }
})
btnMember.addEventListener('click', () => {
  if(document.getElementById('MembersIcon').clicked == true){
    btnMember.style.fill = "black";
     } else{
      btnMember.style.fill = "white";
  
    }
})
btnSetting.addEventListener('click', () => {
  if(document.getElementById('SettingIcon').clicked == true){
    btnSetting.style.fill = "black";
     } else{
      btnSetting.style.fill = "white";
  
    }
})



