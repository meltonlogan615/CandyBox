//jquery Show-Hide Toggle

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<flag>Toggle between hiding and showing the paragraphs</flag>

<script>
$(document).ready(function(){
  $("flag").click(function(){
    $("p").toggle();
  });
});
</script>

//jQuery Slide-in-out

<script> 
$(document).ready(function(){
  $("#flip").click(function(){  //The shown content
    $("#panel").slideToggle("slow"); //hidden content
  });
});
</script>


Accordion Option
https://www.w3schools.com/howto/howto_js_accordion.asp