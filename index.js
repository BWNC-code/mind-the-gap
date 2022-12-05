function myFunction() {
    var x = document.getElementById("contents");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

  const splash = document.querySelector('.splash');

  // document.addEventListener('DOMContentLoaded', (e)=>{
  //   setTimeout(()=>{
  //     splash.classList.add('display-none');
  //   }, 2000);
  // })
