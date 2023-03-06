  // section1
  let x;
  $(window).on('scroll', function() {
    x = $(window).scrollTop();
    $('.t').css('background-size', 100 + parseInt(x / 20) + 'vw');
  });

  let y;
  $(window).on('scroll', function() {
    y = $(window).scrollTop();
    $('.ttop').css('background-size', 95 + parseInt(y / 15) + 'vw');
  });

  let z;
  $(window).on('scroll', function() {
    z = $(window).scrollTop();
    $('.tsecond').css('background-size', 50 + parseInt(z / 0.9) + 'vw');
  });
  let z1;
  $(window).on('scroll', function() {
    z1 = $(window).scrollTop();
    $('.tsecond2').css('background-size', 55 + parseInt(z1 / 0.8) + 'vw');
  });

  // window.onscroll = function() {myFunction()};
  // function myFunction() {
  //   if (document.documentElement.scrollTop <0.9*window.innerHeight) {
  //     document.getElementById("myP").className = "ttop";
  //   }
  //   else if (document.documentElement.scrollTop <2.5*window.innerHeight) {
  //     document.getElementById("myP").className = "t";
  //   }
  //   else if (document.documentElement.scrollTop <2.8*window.innerHeight) {
  //     document.getElementById("myP").className = "tsecond";
  //   }
  //   else if (document.documentElement.scrollTop <2.9*window.innerHeight) {
  //     document.getElementById("myP").className = "tsecond2";
  //   }
  //   else if (document.documentElement.scrollTop >3*window.innerHeight) {
  //     document.getElementById("myP").classList.remove("tsecond2","tsecond","t","ttop");
  //   }
//
// else if (document.documentElement.scrollTop <3.2*window.innerHeight) {
//   document.getElementById("image1").className = "image1";
// }
// else if (document.documentElement.scrollTop <3.7*window.innerHeight) {
//   document.getElementById("image2").className = "image2";
// }
// else if (document.documentElement.scrollTop <3.9*window.innerHeight) {
//   document.getElementById("image3").className = "image3";
// }

  // }


    // else if (document.documentElement.scrollTop <6*window.innerHeight) {
    //   document.getElementById("image1").classList.remove("image1");
    // }
  // }



  // section2

 $(window).on("scroll", () => {
  let scroll_height = $(window).scrollTop();
  let vw_height = parseInt($(window).height()) * 2.70;
  let start_point = parseInt(scroll_height - vw_height);
    // console.log(scroll_height, vw_height, start_point);
    if (scroll_height > vw_height) {
      let blur = start_point * (0.0005) +'vw'
      let x = start_point * (-0.25/2.3) + 'vw'
      let y = start_point * (0.25/2.3) + 'vw'
      let z = start_point * (0) + 'vw'
      let scale = parseInt(start_point) * (0.0055)

      let x2 = start_point * (0.3/2.3) + 'vw'
      let y2 = start_point * (0.2/2.3) + 'vw'
      let z2 = start_point * (0) + 'vw'

      let x3 = start_point * (0.2/2.3) + 'vw'
      let y3 = start_point * (-0.2/2.3) + 'vw'
      let z3 = start_point * (0) + 'vw'

      let x4 = start_point * (-0.3/2.3) + 'vw'
      let y4 = start_point * (-0.05/2.3) + 'vw'
      let z4 = start_point * (0) + 'vw'

      $('.image1').css('transform', `translate3d(${x},${y},${z}) scale3d(${scale},${scale},${scale})`);
      $('.image1').css('filter', `blur(${blur})`);

      $('.image2').css('transform', `translate3d(${x2},${y2},${z2}) scale3d(${scale},${scale},${scale})`);
      $('.image2').css('filter', `blur(${blur})`);

      $('.image3').css('transform', `translate3d(${x3},${y3},${z3}) scale3d(${scale},${scale},${scale})`);
      $('.image3').css('filter', `blur(${blur})`);

      $('.image4').css('transform', `translate3d(${x4},${y4},${z4}) scale3d(${scale},${scale},${scale})`);
      $('.image4').css('filter', `blur(${blur})`);
    }
  });

  $(window).on("scroll", () => {
    let scroll_height2 = $(window).scrollTop();
    let vw_height2 = parseInt($(window).height()) * 2.78;
    let start_point2 = parseInt(scroll_height2 - vw_height2);
    if (scroll_height2 > vw_height2) {
      let blur2 = start_point2 * (0.0005) +'vw'
      let x5 = start_point2 * (0.2/2.3) + 'vw'
      let y5 = start_point2 * (-0.25/2.3) + 'vw'
      let z5 = start_point2 * (0) + 'vw'
      let scale2 = parseInt(start_point2) * (0.0055)

      let x6 = start_point2 * (0.2/2.3) + 'vw'
      let y6 = start_point2 * (0.1/2.3) + 'vw'
      let z6 = start_point2 * (0) + 'vw'

      let x7 = start_point2 * (-0.25/2.3) + 'vw'
      let y7 = start_point2 * (-0.05/2.3) + 'vw'
      let z7 = start_point2 * (0) + 'vw'

      $('.image5').css('transform', `translate3d(${x5},${y5},${z5}) scale3d(${scale2},${scale2},${scale2})`);
      $('.image5').css('filter', `blur(${blur2})`);

      $('.image6').css('transform', `translate3d(${x6},${y6},${z6}) scale3d(${scale2},${scale2},${scale2})`);
      $('.image6').css('filter', `blur(${blur2})`);

      $('.image7').css('transform', `translate3d(${x7},${y7},${z7}) scale3d(${scale2},${scale2},${scale2})`);
      $('.image7').css('filter', `blur(${blur2})`);
     }
   });

  $(window).on("scroll", () => {
    let scroll_height3 = $(window).scrollTop();
    let vw_height3 = parseInt($(window).height()) * 2.86;
    let start_point3 = parseInt(scroll_height3 - vw_height3);
    if (scroll_height3 > vw_height3) {
      let blur3 = start_point3 * (0.0005) +'vw'
      let x8 = start_point3 * (0.3/2.3) + 'vw'
      let y8 = start_point3 * (0.2/2.3) + 'vw'
      let z8 = start_point3 * (0) + 'vw'
      let scale3 = parseInt(start_point3) * (0.0055)

      let x9 = start_point3 * (-0.25/2.3) + 'vw'
      let y9 = start_point3 * (0.1/2.3) + 'vw'
      let z9 = start_point3 * (0) + 'vw'

      let x10 = start_point3 * (0.2/2.3) + 'vw'
      let y10 = start_point3 * (-0.25/2.3) + 'vw'
      let z10 = start_point3 * (0) + 'vw'

      let x11 = start_point3 * (-0.25/2.3) + 'vw'
      let y11 = start_point3 * (-0.2/2.3) + 'vw'
      let z11 = start_point3 * (0) + 'vw'

      $('.image8').css('transform', `translate3d(${x8},${y8},${z8}) scale3d(${scale3},${scale3},${scale3})`);
      $('.image8').css('filter', `blur(${blur3})`);

      $('.image9').css('transform', `translate3d(${x9},${y9},${z9}) scale3d(${scale3},${scale3},${scale3})`);
      $('.image9').css('filter', `blur(${blur3})`);

      $('.image10').css('transform', `translate3d(${x10},${y10},${z10}) scale3d(${scale3},${scale3},${scale3})`);
      $('.image10').css('filter', `blur(${blur3})`);

      $('.image11').css('transform', `translate3d(${x11},${y11},${z11}) scale3d(${scale3},${scale3},${scale3})`);
      $('.image11').css('filter', `blur(${blur3})`);
     }
   });

   $(window).on("scroll", () => {
     let scroll_height4 = $(window).scrollTop();
     let vw_height4 = parseInt($(window).height()) * 2.94;
     let start_point4 = parseInt(scroll_height4 - vw_height4);
     if (scroll_height4 > vw_height4) {
       let blur4 = start_point4 * (0.0005) +'vw'
       let x1 = start_point4 * (-0.2/2.3) + 'vw'
       let y1 = start_point4 * (-0.3/2.3) + 'vw'
       let z = start_point4 * (0) + 'vw'
       let scale4 = parseInt(start_point4) * (0.0055)

       let x2 = start_point4 * (-0.25/2.3) + 'vw'
       let y2 = start_point4 * (0.2/2.3) + 'vw'

       let x3 = start_point4 * (0.25/2.3) + 'vw'
       let y3 = start_point4 * (-0.2/2.3) + 'vw'

       $('.image12').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale4},${scale4},${scale4})`);
       $('.image12').css('filter', `blur(${blur4})`);

       $('.image13').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale4},${scale4},${scale4})`);
       $('.image13').css('filter', `blur(${blur4})`);

       $('.image14').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale4},${scale4},${scale4})`);
       $('.image14').css('filter', `blur(${blur4})`);
      }
    });

    $(window).on("scroll", () => {
      let scroll_height5 = $(window).scrollTop();
      let vw_height5 = parseInt($(window).height()) * 3.02;
      let start_point5 = parseInt(scroll_height5 - vw_height5);
      if (scroll_height5 > vw_height5) {
        let blur = start_point5 * (0.0005) +'vw'
        let x1 = start_point5 * (-0.15/2.3) + 'vw'
        let y1 = start_point5 * (0.2/2.3) + 'vw'
        let z = start_point5 * (0) + 'vw'
        let scale = parseInt(start_point5) * (0.0055)

        let x2 = start_point5 * (0.05/2.3) + 'vw'
        let y2 = start_point5 * (0.35/2.3) + 'vw'

        let x3 = start_point5 * (-0.25/2.3) + 'vw'
        let y3 = start_point5 * (-0.1/2.3) + 'vw'

        let x4 = start_point5 * (0.15/2.3) + 'vw'
        let y4 = start_point5 * (-0.3/2.3) + 'vw'

        let x5 = start_point5 * (0.25/2.3) + 'vw'
        let y5 = start_point5 * (-0.05/2.3) + 'vw'

        $('.image15').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
        $('.image15').css('filter', `blur(${blur})`);

        $('.image16').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
        $('.image16').css('filter', `blur(${blur})`);

        $('.image17').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
        $('.image17').css('filter', `blur(${blur})`);

        $('.image18').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
        $('.image18').css('filter', `blur(${blur})`);

        $('.image19').css('transform', `translate3d(${x5},${y5},${z}) scale3d(${scale},${scale},${scale})`);
        $('.image19').css('filter', `blur(${blur})`);

       }
     });

     $(window).on("scroll", () => {
       let scroll_height6 = $(window).scrollTop();
       let vw_height6 = parseInt($(window).height()) * 3.1;
       let start_point6 = parseInt(scroll_height6 - vw_height6);
       if (scroll_height6 > vw_height6) {
         let blur = start_point6 * (0.0005) +'vw'
         let x1 = start_point6 * (-0.15/2.3) + 'vw'
         let y1 = start_point6 * (-0.3/2.3) + 'vw'
         let z = start_point6 * (0) + 'vw'
         let scale = parseInt(start_point6) * (0.0055)

         let x2 = start_point6 * (0.35/2.3) + 'vw'
         let y2 = start_point6 * (-0.25/2.3) + 'vw'

         let x3 = start_point6 * (0.2/2.3) + 'vw'
         let y3 = start_point6 * (-0.15/2.3) + 'vw'

         let x4 = start_point6 * (-0.2/2.3) + 'vw'
         let y4 = start_point6 * (0.25/2.3) + 'vw'


         $('.image20').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image20').css('filter', `blur(${blur})`);

         $('.image21').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image21').css('filter', `blur(${blur})`);

         $('.image22').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image22').css('filter', `blur(${blur})`);

         $('.image23').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
         $('.image23').css('filter', `blur(${blur})`);


        }
      });

      $(window).on("scroll", () => {
        let scroll_height7 = $(window).scrollTop();
        let vw_height7 = parseInt($(window).height()) * 3.18;
        let start_point7 = parseInt(scroll_height7 - vw_height7);
        if (scroll_height7 > vw_height7) {
          let blur = start_point7 * (0.0005) +'vw'
          let x1 = start_point7 * (0.05/2.3) + 'vw'
          let y1 = start_point7 * (-0.25/2.3) + 'vw'
          let z = start_point7 * (0) + 'vw'
          let scale = parseInt(start_point7) * (0.0055)

          let x2 = start_point7 * (0.05/2.3) + 'vw'
          let y2 = start_point7 * (0.25/2.3) + 'vw'

          let x3 = start_point7 * (0.3/2.3) + 'vw'
          let y3 = start_point7 * (0.15/2.3) + 'vw'

          let x4 = start_point7 * (-0.05/2.3) + 'vw'
          let y4 = start_point7 * (0.1/2.3) + 'vw'

          $('.image24').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
          $('.image24').css('filter', `blur(${blur})`);

          $('.image25').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
          $('.image25').css('filter', `blur(${blur})`);

          $('.image26').css('transform', `translate3d(${x3},${y3},${z}) scale3d(${scale},${scale},${scale})`);
          $('.image26').css('filter', `blur(${blur})`);

          $('.image27').css('transform', `translate3d(${x4},${y4},${z}) scale3d(${scale},${scale},${scale})`);
          $('.image27').css('filter', `blur(${blur})`);

         }
       });

       $(window).on("scroll", () => {
         let scroll_height8 = $(window).scrollTop();
         let vw_height8 = parseInt($(window).height()) * 3.26;
         let start_point8 = parseInt(scroll_height8 - vw_height8);
         if (scroll_height8 > vw_height8) {
           let blur = start_point8 * (0.0005) +'vw'
           let x1 = start_point8 * (0.2/2.3) + 'vw'
           let y1 = start_point8 * (0.2/2.3) + 'vw'
           let z = start_point8 * (0) + 'vw'
           let scale = parseInt(start_point8) * (0.0055)

           let x2 = start_point8 * (-0.35/2.3) + 'vw'
           let y2 = start_point8 * (-0.25/2.3) + 'vw'

           $('.image28').css('transform', `translate3d(${x1},${y1},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image28').css('filter', `blur(${blur})`);

           $('.image29').css('transform', `translate3d(${x2},${y2},${z}) scale3d(${scale},${scale},${scale})`);
           $('.image29').css('filter', `blur(${blur})`);

          }
        });

   // $(document).ready(function() {
   // 	$(".image3").click( function () {
   //     // let galleryscroll = $(".galleryscroll");
   //     $('.body').addClass(".galleryscroll");
   //     // setTimeout( function() {galleryscroll.remove(); }, 500);
   //   });
   // });

  $(document).ready(function() {
   	$('.image3').click( function () {
      let galleryscroll = $('<div class="galleryscroll"> <div class="gg"> </div> </div>');
      $('#one').append(galleryscroll);
      // setTimeout( function() { galleryscroll.remove(); }, 500);
    });
  });

  $(document).ready(function() {
    $('.gg').click( function () {
      let galleryscroll2 = '<div class="galleryscroll"> <h1>test</h1> </div>';
      $('.galleryscroll').append(galleryscroll2);
      // setTimeout( function() { galleryscroll.remove(); }, 500);
    });
  });

  // $(document).ready(function(){
  //   $(".gg").click(function(){
  //     $('#one').remove("galleryscroll");
  //   });
  // });

    // $(document).ready(function() {
    //   $('.slider').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 4
    //   });
    // });


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
