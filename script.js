console.log("Site loaded: Your Name portfolio");
document.querySelectorAll("a").forEach(function(link){
  link.addEventListener("click", function(){
    console.log("Clicked: " + link.textContent);
  });
});