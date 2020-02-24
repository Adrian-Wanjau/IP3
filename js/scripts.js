/*Businesslogic*/
function results(){
    var name = (document.getElementById("name").value); 

    alert("Thank You " + name + " for giving us the feedback")
}

/*UI logic*/
$(document).ready(function() {
    $(".clickable").click(function() {
        $(".columnshowing").toggle();
        $(".columnone img").toggle();
    });
  });
