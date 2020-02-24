/*Business logic*/
function results(){
    var name = (document.getElementById("name").value); 

    alert("Thank You " + name + " for giving us the feedback")
}

/*UI logic*/
$(document).ready(function() {
    $(".clickable1").click(function() {
        $(".columnshowing").toggle();
        $(".columnone img").toggle();
    });
    $(".clickable2").click(function() {
        $(".columnshowing2").toggle();
        $(".columnone2 img").toggle();
    });
    $(".clickable3").click(function() {
        $(".columnshowing3").toggle();
        $(".columnone3 img").toggle();
    });
  });
