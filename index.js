function myFunction() {
    var x = document.getElementById("contents");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }