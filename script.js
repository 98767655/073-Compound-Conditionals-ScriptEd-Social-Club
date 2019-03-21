// set the correct username and password combination below
var correctUsername = "lol";
var correctPassword = "ooo";



$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    if(username==="lol" && password==="ooo"){            
    // display this text if the answer is correct
    $(".message").text("Correct!");
    }else{
    // display this text if the answer is incorrect
    $(".message").text("Wrong! Try again."); 
    }
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW

});