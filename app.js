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

const save = document.getElementById('save');
const cancel = document.getElementById('cancel');

let email_toggle = document.getElementById('email');
email_toggle.checked = JSON.parse(window.localStorage.getItem('email_toggle'));

let profile_toggle = document.getElementById('profile');
profile_toggle.checked = JSON.parse(window.localStorage.getItem('profile_toggle'));

let timezone_switcher = document.getElementById('timezone');
timezone_switcher.selectedIndex = JSON.parse(window.localStorage.getItem('timezone_switcher'));


save.addEventListener('click', e => {
  const element = e.target;

  if(element.classList.contains('button-primary')){
  window.localStorage.setItem("email_toggle", JSON.stringify(email_toggle.checked));
  window.localStorage.setItem("profile_toggle", JSON.stringify(profile_toggle.checked));
  window.localStorage.setItem("timezone_switcher", JSON.stringify(timezone_switcher.selectedIndex));


  }
});

cancel.addEventListener('click', e => {
  const element = e.target;
  if(element.classList.contains('button-disabled')){
    window.localStorage.clear();
    email_toggle.checked = false;
    profile_toggle.checked = false;
    timezone_switcher.selectedIndex = '0';

  }

})


   ///autocomple functionality


const names = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'Alex Nechaev', 'Thomas Jefferson'];

//sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById('userField');

//Execute function on keyup
input.addEventListener('keyup', () =>{
//loop through above array
// removeElements();
removeElements();

for(let i of sortedNames){
  //convert input to lowercase and compare with each string
  if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){
//create li element
    let listItem = document.createElement("li");
    //one common class name
    listItem.classList.add('list-items');
    
    listItem.style.cursor = 'pointer';
    listItem.setAttribute('onclick', "displayNames('"+ i +"')");
    //display match part in bold
    let word = "<b>"+ i.substring(0,input.value.length)+"</b>";
    word += i.substring(input.value.length);
    //display the value in array
    listItem.innerHTML = word;
    document.querySelector('.list').appendChild(listItem);
  }
}

})

function displayNames(value){
  input.value = value;
  removeElements();
}

function removeElements(){
  let clear = document.getElementById('listClear');
clear.innerHTML = '';
}