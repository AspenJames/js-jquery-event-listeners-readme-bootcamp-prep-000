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
  $("#typing").on("keypress", function(e){
    if(parseInt(e.detail || e.which) == 71){
      alert("You have pressed G.");
    }
  })
}

function submitIt(){
  $("input").on("submit", function(){
    alert("Your form is going to be submitted now.");
  })
}
