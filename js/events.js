//define functions here

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
});
function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  })
}

function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  })
}

function pressIt(){
  $("#typing").on("keydown", function(e){
    if(parseInt(e.which) == 71){
      alert("You have pressed G.");
    }
  })
}

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
  })
}
