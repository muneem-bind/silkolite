document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
  
  function SeeMore()
  {
    window.location.href = ("aboutus.html");
  }
  function seeMore(){
    window.location.href = ("fdy.html");
  }
  function Seemore(){
    window.location.href = ("poy.html");
  }
  