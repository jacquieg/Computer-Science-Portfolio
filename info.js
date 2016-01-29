//variables for images and comments
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");


var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");


//comments for turtle image
item1.addEventListener("click", function(){
    info1.innerHTML = "I own a redneck turtle";
    info2.innerHTML = "Turtles are my favorite kind of animal";
    info3.innerHTML = "Turtles are actually really fast ";
});
//comments for taco image
 item2.addEventListener("click", function(){
    info1.innerHTML = "Tacos are my favorite kind of food";
    info2.innerHTML = "My moms tacos are the best";
    info3.innerHTML = "My favorite tacos are the ones with carne asada";
});  
//comments for make up image
item3.addEventListener("click", function(){
    info1.innerHTML = "Make up is my favorite thing in the world";
    info2.innerHTML = "I wear make up everyday";
    info3.innerHTML = "BEWARE!! it causes pimples";
});
//comments for pomagranate image 
item4.addEventListener("click", function(){
    info1.innerHTML = "Pomagranates are my favorite fruit..well besides strawberries";
    info2.innerHTML = "First they're sower then they're sweet";
    info3.innerHTML = "They stain my clothes all the time";
});
