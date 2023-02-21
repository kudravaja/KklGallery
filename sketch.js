// function setup() {
//   createCanvas(1000, 1000);
// }
//
// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 50, 50);
// }
  // const img = document.querySelector('img');
  //
  // window.addEventListener('scroll', () => {
  //   const current = window.scrollTop;
  //   img.css.clipPath = 'circle(${current + 10}vw at center)';
  // });
  //
  // window.addEventListener('scroll', () => {
  //   const current = window.scrollTop();
  //   img.css.clipPath = ('circle', 100 +  parseInt(x / 20) + 'vw');
  // });
  //

  // section1
  let x;
  $(window).on('scroll', function() {
    x = $(window).scrollTop();
    $('.t').css('background-size', 100 + parseInt(x / 10) + 'vw');
  });

  let y;
  $(window).on('scroll', function() {
    y = $(window).scrollTop();
    $('.ttop').css('background-size', 100 + parseInt(y / 30) + 'vw');
  });

  let z;
  $(window).on('scroll', function() {
    z = $(window).scrollTop();
    $('.tsecond').css('background-size', 45 + parseInt(z / 1.5) + 'vw');
  });
  let z1;
  $(window).on('scroll', function() {
    z1 = $(window).scrollTop();
    $('.tsecond2').css('background-size', 45 + parseInt(z1 / 0.5) + 'vw');
  });

  window.onscroll = function() {myFunction()};
  function myFunction() {
    if (document.documentElement.scrollTop <0.8*window.innerHeight) {
      document.getElementById("myP").className = "ttop";
    }
    else if (document.documentElement.scrollTop <2.9*window.innerHeight) {
      document.getElementById("myP").className = "t";
    }
    else if (document.documentElement.scrollTop <3.2*window.innerHeight) {
      document.getElementById("myP").className = "tsecond";
    }
    else if (document.documentElement.scrollTop <3.75*window.innerHeight) {
      document.getElementById("myP").className = "tsecond2";
    }
    else {
      document.getElementById("myP").classList.remove('tsecond2');
    }
  }

// section2
  // let image1;
  // $(window).on('scroll', function() {
  //   image1 = $(window).scrollTop();
  //   $('.image1').css('transform', 100 + parseInt(image1 / 10) + 'vw');
  // });



  document.onscroll = function() {MyFunction()};
  function MyFunction() {
    if (document.documentElement.scrollTop <3.20*window.innerHeight) {
      document.getElementById("image").className = "image1";
    }
    else if (document.documentElement.scrollTop <5.5*window.innerHeight) {
      document.getElementById("image").className = "image1hover";
    }
    else {
      document.getElementById("image").classList.remove('image1hover');
    }
  }
  // function translateFunction() {
  // document.getElementById(".image1").css.transform="translateX(100px)"};
  //
  // let z3 = ["6","-16","13","-20","-23","9"];
  // $(window).on('scroll', function() {
  //   z1 = $(window).scrollTop();
  //   $('.tsecond2').css.transform = `translate(${z3[1]}%,${forarray[1]}%)`;
  // });

  // let z2;
  // $(window).on('scroll', function() {
  //   z2 = $(window).scrollTop();
  //   $('.image1').css.transform = "translate(x,y)";
  // });
  // let z1;
  // $(window).on('scroll', function() {
  //   z1 = $(window).scrollTop();
  //   $('.tsecond2').css('background-size', 45 + parseInt(z1 / 0.5) + 'vw');
  // });

  // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //   $(".image1").css({width:(100 + scroll/5) + "vw"})
  // });
  // transform : 'translate3d(0px, 0px, 0px)'
  // .css({"transform" : "translate3d(0px, + st  + "%")",
  // ({backgroundPosition: '0px'+st+'px'})
