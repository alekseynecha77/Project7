let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

let ToSend = document.getElementById('send');

ToSend.addEventListener('click', () =>{
 ToSend.innerHTML = `  
 <body id="bodyMEMBER">
 <div class="members-cc">
 <div class='members-container'>
     <img src="images/member-1.jpg" class="member-photo" alt="member photo">
     <div class="member-info">
         <p class="MName">Victoria Chambers</p>
         <a href="#">victoria.chambers@example.com</a>
     </div>
     <p>02/12/22</p> 
 </div>
 </body>
`

document.getElementById('bodyMEMBER').style.display = "block";

})