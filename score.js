// Declare variable for point and clear point
var Score = document.getElementById("score");
var clearscore = document.getElementById("Clear");


clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});
 var allscores = localStorage.getItem("allscores");
 allscores = JSON.parse(allpoint);

 if (allscores !== null) {
     for (var i = 0; i < allscores.length; i++) {
         var createline = document.createElement("li");
         createline.textContent = allscores[i].Initials + "" + allscores[i].point;
         Score.appendChild(createline);
     }
 }