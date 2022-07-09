const alertBanner = document.getElementById("alert");
const bell = document.getElementById('bell');


alertBanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>

`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
    });

    function myFunction() {
       var popup = document.getElementById('myPopup');
       popup.classList.toggle("show");
    };