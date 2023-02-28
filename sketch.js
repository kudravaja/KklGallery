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
    else if (document.documentElement.scrollTop <3.25*window.innerHeight) {
      document.getElementById("myP").className = "tsecond2";
    }
    else if (document.documentElement.scrollTop >3.4*window.innerHeight) {
      document.getElementById("myP").classList.remove("tsecond2","tsecond","t","ttop");
    }
    // else if (document.documentElement.scrollTop <3.5*window.innerHeight) {
    //   document.getElementById("image1").className = "image1";
    // }
    // else if (document.documentElement.scrollTop <3.7*window.innerHeight) {
    //   document.getElementById("image2").className = "image2";
    // }
    // else if (document.documentElement.scrollTop <3.9*window.innerHeight) {
    //   document.getElementById("image3").className = "image3";
    // }
  }


    // else if (document.documentElement.scrollTop <6*window.innerHeight) {
    //   document.getElementById("image1").classList.remove("image1");
    // }
  // }




  // section2

 // $(window).on("scroll", () => {
 //   let scroll_height = $(window).scrollTop();
 //   let vw_height = parseInt($(window).height()) * 3.22;
 //   let start_point = parseInt(scroll_height - vw_height);
 //    // console.log(scroll_height, vw_height, start_point);
 //    if (scroll_height > vw_height) {
 //      let blur = start_point * (0.0005) +'vw'
 //      let x = start_point * (-0.15) + 'vw'
 //      let y = start_point * (0.25) + 'vw'
 //      let z = start_point * (0) + 'vw'
 //      let scale = parseInt(start_point) * (0.015)
 //
 //      let x2 = start_point * (0.3) + 'vw'
 //      let y2 = start_point * (0.2) + 'vw'
 //      let z2 = start_point * (0) + 'vw'
 //
 //      let x3 = start_point * (0.2) + 'vw'
 //      let y3 = start_point * (-0.1) + 'vw'
 //      let z3 = start_point * (0) + 'vw'
 //
 //      let x4 = start_point * (-0.3) + 'vw'
 //      let y4 = start_point * (-0.15) + 'vw'
 //      let z4 = start_point * (0) + 'vw'
 //
 //      $('.image1').css('transform', `translate3d(${x},${y},${z}) scale3d(${scale},${scale},${scale})`);
 //      $('.image1').css('filter', `blur(${blur})`);
 //
 //      $('.image2').css('transform', `translate3d(${x2},${y2},${z2}) scale3d(${scale},${scale},${scale})`);
 //      $('.image2').css('filter', `blur(${blur})`);
 //
 //      $('.image3').css('transform', `translate3d(${x3},${y3},${z3}) scale3d(${scale},${scale},${scale})`);
 //      $('.image3').css('filter', `blur(${blur})`);
 //
 //      $('.image4').css('transform', `translate3d(${x4},${y4},${z4}) scale3d(${scale},${scale},${scale})`);
 //      $('.image4').css('filter', `blur(${blur})`);
 //    }
 //  });
 //
 //   $(window).on("scroll", () => {
 //     let scroll_height2 = $(window).scrollTop();
 //     let vw_height2 = parseInt($(window).height()) * 3.24;
 //     let start_point2 = parseInt(scroll_height2 - vw_height2);
 //     if (scroll_height2 > vw_height2) {
 //       let blur2 = start_point2 * (0.0005) +'vw'
 //       let x5 = start_point2 * (0.2) + 'vw'
 //       let y5 = start_point2 * (-0.25) + 'vw'
 //       let z5 = start_point2 * (0) + 'vw'
 //      let scale2 = parseInt(start_point2) * (0.01)
 //
 //       let x6 = start_point2 * (0.05) + 'vw'
 //       let y6 = start_point2 * (0.1) + 'vw'
 //       let z6 = start_point2 * (0) + 'vw'
 //
 //       let x7 = start_point2 * (-0.15) + 'vw'
 //       let y7 = start_point2 * (-0.25) + 'vw'
 //       let z7 = start_point2 * (0) + 'vw'
 //
 //       $('.image5').css('transform', `translate3d(${x5},${y5},${z5}) scale3d(${scale2},${scale2},${scale2})`);
 //       $('.image5').css('filter', `blur(${blur2})`);
 //
 //       $('.image6').css('transform', `translate3d(${x6},${y6},${z6}) scale3d(${scale2},${scale2},${scale2})`);
 //       $('.image6').css('filter', `blur(${blur2})`);
 //
 //       $('.image7').css('transform', `translate3d(${x7},${y7},${z7}) scale3d(${scale2},${scale2},${scale2})`);
 //       $('.image7').css('filter', `blur(${blur2})`);
 //
 //     }
 //   });





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
