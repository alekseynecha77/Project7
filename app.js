// const alertBanner = document.getElementById("alert");
// const bell = document.getElementsByClassName('bell-svg');



   function myFunction() {
      var popup = document.getElementsByClassName("collapsible");
      var i;
   
      bell.innerHTML = `
   
      <div class="content">
        <p>Dale Byrd liked the post  <strong>Facebook's Changes for 2021</strong></p>
      </div>
      
`

 for(i=0; i<popup.length;i++){
   popup[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if(content.style.maxHeight){
         content.style.maxHeight = null;
      }else{
         content.style.maxHeight = content.scrollHeight + "px";

      }

 });


 }
   }
