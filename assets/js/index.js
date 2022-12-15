// credit https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

function nav() {
    const x = document.getElementById("contents");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

