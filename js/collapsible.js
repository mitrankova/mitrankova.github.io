var coll = document.getElementsByClassName("collapsible"||"collapsiblepub");
var i;

for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
         content.style.display = "none";
      } else {
         content.style.display = "block";
      }
   });
}

var collpub = document.getElementsByClassName("collapsiblepub");
var j;

for (j = 0; j < collpub.length; j++) {
   collpub[j].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
         content.style.display = "none";
      } else {
         content.style.display = "block";
      }
   });
}