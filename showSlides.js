let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }
  /**function ShowHideDisplay(input) {
    let container = document.getElementsByClassName(input);
    if (container[0].style.display!="none")
    {
        container[0].style.display="none";
        console.log("Display changed to none.")
    }
    else
    {
        container[0].style.display="block"
        console.log("Display changed to block.")
    }
  }**/
  function ShowHideDisplay(input) {
    let container = document.getElementsByClassName(input);
    let container2 = document.getElementById(input);
    if (container[0].style.height=="30vw")
    {
        container[0].style.height="0px";
        for(const child of container[0].children)
        {
            child.style.display="none";
        }
        console.log("Display changed to none.")
    }
    else
    {
        container[0].style.height="30vw";
        for(const child of container[0].children)
        {
            child.style.display="block";
        }
        console.log("Display changed to none.")
    }
  }
  function ShowHideDisplayID(input) {
    let container = document.getElementById(input);;
    if (container.style.height=="30vw")
    {
        container.style.height="0px";
        for(const child of container.children)
        {
            child.style.display="none";
        }
        console.log("Display changed to none.")
    }
    else
    {
        container.style.height="30vw";
        for(const child of container.children)
        {
            child.style.display="block";
        }
        console.log("Display changed to none.")
    }
  }