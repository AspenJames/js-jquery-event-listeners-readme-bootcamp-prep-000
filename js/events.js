//define functions here

$(document).ready(function(){
getIt()
frameIt()


});
function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  })
}

function frameIt(){
  $("img").on("load", function(){
    $("img").append("class='tasty'");
  })
}
