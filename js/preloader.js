window.onload=function(){
TweenMax.to("#first_logo",2,{
    delay: 1,
    y: -500,
    ease: Expo.easeInOut,
    opacity:0
});

TweenMax.to(".overlay",2,{
    delay: 2,
    top: "-100%",
    ease: Expo.easeInOut
  });
TweenMax.from(".nav",2,{
    delay: 2.5,
    x:-200,
    ease: Expo.easeInOut
  });
  TweenMax.from(".text",2,{
    delay: 2.8,
    x:600,
    ease: Expo.easeInOut
  });
  TweenMax.from(".colors",3,{
    delay: 2.8,
    x:500,
    ease: Expo.easeInOut
  });
  TweenMax.from(".circle-rotate",4,{
    delay: 3.5,
    opacity:0,
    ease: Expo.easeInOut
  });
}

