// function for intro animations
function introAnimations(){

    // creating variables for intro animation
    const introText = document.querySelector(".intro-text");
    const introSubText = document.querySelector(".intro-sub-text");
    const slider = document.querySelector(".slider");
    const slider2 = document.querySelector(".slider2");
    const intro = document.querySelector(".intro");
    
    
    // adding an event listener for the intro animation to start when the page loads
    window.addEventListener("load", function(){
      // intro text animations
      introText.style.opacity = "1";
      introText.style.transition = "opacity 2s";
      introText.style.top = "200px";
      introText.style.transition = "2s ease";
      introText.style.transitionDelay = "1s";
      
      // intro-sub-text animations
      introSubText.style.opacity = "1";
      introSubText.style.transition = "opacity 2s";
      introSubText.style.transitionDelay ="2.8s";
      
      // slider up animaiton
      slider.style.transform = "translateY(0)";
      slider.style.transition = "2s";
      slider.style.transform = "translateY(-100%)";
      slider.style.transition = "2s";
      
      // slider down animation
      slider2.style.transform = "translateY(0)";
      slider2.style.transition = "2s";
      slider2.style.transform = "translateY(100%)";
      slider2.style.transitionDelay = "5s";
      
      // intro dissappear animation
      intro.style.transform = "translateY(100%)";
      intro.style.transition = "2s";
      intro.style.transitionDelay = "5.15s";
    });
    
    };
    
    introAnimations();
    
    
    // function for hidden-notification
    function hiddenNotificationAnimation(){
      
      const hiddenNotification = document.querySelector(".hidden-notification");
      
      window.addEventListener("load", function(){
        hiddenNotification.style.opacity = "1";
        hiddenNotification.style.transition = "2s";
        hiddenNotification.style.transform = "translateY(0)";
        hiddenNotification.style.transition = "2s";
        hiddenNotification.style.transitionDelay = "8s";
      });
    };
    
    hiddenNotificationAnimation();
    
    // function for bringing in logo and nav animations after intro
    function logoNavAnimation(){
      const logo = document.querySelector(".logo");
      const nav = document.querySelector(".nav");
    
      window.addEventListener("load", function(){
        // animations for logo
        logo.style.transform = "translateX(0)";
        logo.style.transition = "2s";
        logo.style.transitionDelay = "5s";
    
        // animations for nav
        nav.style.transform = "translateX(0)";
        nav.style.transition = "2s";
        nav.style.transitionDelay = "5s";
      });
    };
    
    logoNavAnimation();
    
    // function for bringing in mobileLogo and mobileNav animations after intro
    function mobileLogoNavAnimation(){
      const mobileLogo = document.querySelector(".mobile-logo");
      const mobileSubLogo = document.querySelector(".mobile-sub-logo");
      const hamburger = document.querySelector(".hamburger");
    
      window.addEventListener("load", function(){
        // animations for mobileLogo
        mobileLogo.style.transform = "translateX(0)";
        mobileLogo.style.transition = "2s";
        mobileLogo.style.transitionDelay = "5s";
    
        // animations for mobileSubLogo
        mobileSubLogo.style.transform = "translateX(0)";
        mobileSubLogo.style.transition = "2s";
        mobileSubLogo.style.transitionDelay = "5s";
    
        // animations for hamburger
        hamburger.style.transform = "translateX(0)";
        hamburger.style.transition = "2s";
        hamburger.style.transitionDelay = "5s";
      });
    };
    
    mobileLogoNavAnimation();
    
    
    // function for mobile navigation menu animations
    function mobileNavigationAnimations(){
    
    const mobileNav = document.querySelector(".mobile-nav");
    const hamburger = document.querySelector(".hamburger");
    const mnl = document.querySelector(".mnl");
    const l1 = document.querySelector(".l1");
    const l2 = document.querySelector(".l2");
    const l3 = document.querySelector(".l3");
    
    hamburger.addEventListener("click", function(){
      // if statement for hamburger menu visibility
      if (mobileNav.style.visibility !=  "visible"){
        // mobile navigation animations
        mobileNav.style.visibility = "visible";
        mobileNav.style.transition = ".3s";
        mobileNav.style.opacity = "1";
        mobileNav.style.transition = ".3s";
        mobileNav.style.transform = "translateY(0)";
        mobileNav.style.transition = ".3s";
    
        // hamburger menu navigation animations
        l1.style.transform = "rotate(45deg)";
        l1.style.transform += "translateY(15px)";
        l1.style.transition = ".3s";
    
        l2.style.transform = "rotate(90deg)";
        l2.style.transform += "translateY(10px)";
        l2.style.opacity = "0";
        l2.style.transition = ".3s";
    
        l3.style.transform = "rotate(-45deg)";
        l3.style.transform += "translateY(-15px)";
        l3.style.transition = ".3s";
    
        
        hamburger.style.transform = "translateX(10px)";
        hamburger.style.transition = ".3s";
      } else {
        mobileNav.style.transform = "translateY(-50px)";
        mobileNav.style.transition = ".3s";
        mobileNav.style.visibility = "hidden";
        mobileNav.style.transition = ".3s";
        mobileNav.style.opacity = "0";
        mobileNav.style.transition = ".3s";
    
        l1.style.transform = "rotate(0)";
        l1.style.transform += "translateY(0)";
        l1.style.transition = ".3s";
    
        l2.style.transform = "rotate(0)";
        l2.style.transform += "translateY(0)";
        l2.style.opacity = "1";
        l2.style.transition = ".3s";
    
        l3.style.transform = "rotate(0)";
        l3.style.transform += "translateY(0)";
        l3.style.transition = ".3s";
    
        hamburger.style.transform = "translateX(0)";
        hamburger.style.transition = ".3s";
        };
    });
    
    };
    
    mobileNavigationAnimations();
