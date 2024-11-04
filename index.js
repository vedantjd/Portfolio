$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer"
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Effective Communicator",
        "Problem Solver",
        "Continuous Learner"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  






//   Background
function generateRandomPercent(min = 0, max = 100) {
    const randomInteger = Math.floor(Math.random() * (max + 1));
    return `${randomInteger}%`;
  }
  function generateRadomDelay(interval = 3) {
    const randomInteger = Math.random() * (interval + 1);
    return `${randomInteger}s`;
  }
  
  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = generateRandomPercent();
    star.style.left = generateRandomPercent();
    star.style.animationDelay = generateRadomDelay();
    return star;
  }
  
  function renderStars(amount = 15) {
    const container = document.getElementById("container");
    const placeholdersArray = Array(amount).fill("star_placeholder");
    const starsArray = placeholdersArray.map((starPlacholder, index) =>
      createStar()
    );
    container.append(...starsArray);
  }
  
  renderStars();
  

  function copyToClipboard() {
    // Select the email text
    const emailText = document.getElementById("email").textContent;

    // Copy the text to the clipboard
    navigator.clipboard.writeText(emailText)
        .then(() => {
            // Show the tooltip message
            const message = document.getElementById("copyMessage");
            message.classList.add("show"); // Add the show class
            message.style.display = "block"; // Ensure it displays

            // Hide the tooltip after 2 seconds
            setTimeout(() => {
                message.classList.remove("show"); // Remove the show class
                message.style.display = "none"; // Hide it again
            }, 2000);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

