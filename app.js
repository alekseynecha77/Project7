const alertBanner = document.getElementById("alert");
const bell = document.getElementsByClassName('bell-svg');


alertBanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>

`
// function myFunction() {

//       bell.classList
//        var popup = document.getElementById('myPopup');
//        popup.classList.toggle("show");
// }

   //  const element = e.target;
   //  if (element.classList.contains("alert-banner-close")) {
   //  alertBanner.style.display = "none"
   //  }
   function myFunction() {
   bell.addEventListener('click', () => {
   
      bell.innerHTML = `
 <div class='popup'>
 <ul>
 <li>aedwaaedawedawde</li>
 <li>aedwaaedawedawde</li>
 <li>aedwaaedawedawde</li>
 <li>aedwaaedawedawde</li>
 </ul>
 </div>
 `
    });

   }
 
